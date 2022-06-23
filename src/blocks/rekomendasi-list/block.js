import icon from "./icon";
import { EditorComponent } from "./components";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;

const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	lists: {
		type: "array",
		default: [], //format: {title, imageid, imagealt, imageurl, }
	},
};

registerBlockType("dbe/rekomendasi-list", {
	title: __("Rekomendasi List"),
	icon: icon,
	category: "dafundablocks",
	keywords: [__("Tutorial"), __("Rekomendasi List"), __("Dafunda Blocks")],
	attributes,
	supports: {
		multiple: false,
	},
	edit: withSelect((select, ownProps) => {
		const { getBlock, getClientIdsWithDescendants } =
			select("core/block-editor") || select("core/editor");

		return {
			block: getBlock(ownProps.clientId),
			getBlock,
			getClientIdsWithDescendants,
		};
	})(EditorComponent),
	save: () => null,
});
