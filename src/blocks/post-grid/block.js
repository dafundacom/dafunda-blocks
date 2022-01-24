// Import icon.
import icons from "./icons";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

import attributes from "./attributes";
import PostGridBlock from "./editor";
import Inspector from "./inspector";

const { withSelect } = wp.data;
const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor || wp.editor;
const { Placeholder, Spinner, Toolbar, QueryControls } = wp.components;
const { addQueryArgs } = wp.url;
const { apiFetch } = wp;
const canSelectMultipleCategories =
	QueryControls.toString().includes("selectedCategories");

//function below taken from https://stackoverflow.com/a/37616104
const filterObjectAttributes = (obj, condition) =>
	Object.fromEntries(Object.entries(obj).filter(condition));

export default registerBlockType("dbe/post-grid", {
	title: __("Post Grid", "dafunda-blocks"),
	description: __(
		"Add a grid or list of customizable posts.",
		"dafunda-blocks"
	),
	icon: icons,
	category: "dafundablocks",
	keywords: [
		__("post grid", "dafunda-blocks"),
		__("posts", "dafunda-blocks"),
		__("Dafunda Blocks", "dafunda-blocks"),
	],
	attributes,
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */

	getEditWrapperProps({ wrapAlignment }) {
		if (["full", "wide", "center"].includes(wrapAlignment)) {
			return { "data-align": wrapAlignment };
		}
	},

	edit: withSelect((select, props) => {
		const {
			order,
			categoryArray,
			categories,
			orderBy,
			amountPosts,
			offset,
			tagArray,
			authorArray,
		} = props.attributes;

		const { getEntityRecords } = select("core");
		const { getCurrentPostId } =
			select("core/block--editor") || select("core/editor"); //double dashes are needed

		const getPosts = filterObjectAttributes(
			{
				categories: canSelectMultipleCategories
					? categoryArray && categoryArray.length > 0
						? categoryArray.map((cat) => cat.id)
						: []
					: categories,
				order,
				orderby: orderBy,
				per_page: amountPosts,
				offset: offset,
				exclude: [getCurrentPostId()],
				tags: tagArray,
				author: authorArray,
			},
			(value) => typeof value !== "undefined"
		);

		return {
			posts: getEntityRecords("postType", "post", getPosts),
		};
	})((props) => {
		const { attributes, setAttributes, posts } = props;
		const { postLayout, wrapAlignment, categories } = attributes;

		const emptyPosts = Array.isArray(posts) && posts.length;

		if (categories !== "" && canSelectMultipleCategories) {
			apiFetch({
				path: addQueryArgs("/wp/v2/categories", {
					per_page: -1,
				}),
			})
				.then((categoriesList) => {
					setAttributes({
						categoryArray: categoriesList.filter(
							(c) => c.id === Number(categories)
						),
						categories: "",
					});
				})
				.catch(() => {
					setAttributes({
						categoryArray: [],
						categories: "",
					});
				});
		}

		if (!emptyPosts) {
			return (
				<Placeholder
					icon="admin-post"
					label={__("Dafunda Blocks Post Grid", "dafunda-blocks")}
				>
					{!Array.isArray(posts) ? (
						<Spinner />
					) : (
						<>
							<Inspector {...{ ...props }} />
							<div>{__("No posts found.", "dafunda-blocks")}</div>
						</>
					)}
				</Placeholder>
			);
		}

		const toolBarButton = [
			{
				icon: "grid-view",
				title: __("Grid View", "dafunda-blocks"),
				onClick: () => setAttributes({ postLayout: "grid" }),
				isActive: "grid" === postLayout,
			},
			{
				icon: "list-view",
				title: __("List View", "dafunda-blocks"),
				onClick: () => setAttributes({ postLayout: "list" }),
				isActive: "list" === postLayout,
			},
		];

		return (
			<>
				<Inspector {...props} />
				<BlockControls>
					<BlockAlignmentToolbar
						value={wrapAlignment}
						controls={["center", "wide", "full"]}
						onChange={(value) => setAttributes({ wrapAlignment: value })}
					/>
					<Toolbar controls={toolBarButton} />
				</BlockControls>
				<PostGridBlock {...props} />
			</>
		);
	}),
	save: () => null,
});
