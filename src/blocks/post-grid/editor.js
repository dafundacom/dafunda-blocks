import FeaturedImage from "./image";
import moment from "moment";

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
const { decodeEntities } = wp.htmlEntities;

export default class PostGridBlock extends Component {
	render() {
		const {
			attributes: {
				checkPostImage,
				checkPostAuthor,
				checkPostDate,
				checkPostExcerpt,
				checkPostLink,
				checkPostTitle,
				excerptLength,
				readMoreText,
				postLayout,
				columns,
				postTitleTag,
			},
			className,
			posts,
		} = this.props;

		const SectionTag = "section";
		const PostTag = postTitleTag;

		return [
			<>
				<SectionTag
					className={`${className ? `${className} ` : ""}dbe-block-post-grid`}
				>
					<div
						className={`dbe-post-grid-items ${
							postLayout === "list" ? "is-list" : `is-grid columns-${columns}`
						}`}
					>
						{posts.map((post, i) => (
							<article
								key={i}
								id={`post-${post.id}`}
								className={`post-${post.id}${
									post.featured_image_src && checkPostImage
										? " has-post-thumbnail"
										: ""
								}
								`}
							>
								<>
									{checkPostImage && post.featured_media ? (
										<div className="dbe-block-post-grid-image">
											<FeaturedImage
												{...this.props}
												imgID={post.featured_media}
												imgSizeLandscape={post.featured_image_src}
											/>
										</div>
									) : null}
									<div className="dbe_block-post-grid-text">
										<header className="dbe_block-post-grid-header">
											{checkPostTitle && (
												<PostTag className="dbe-block-post-grid-title">
													<a href={post.link} target="_blank" rel="bookmark">
														{decodeEntities(post.title.rendered.trim()) ||
															__("(Untitled)", "dafunda-blocks")}
													</a>
												</PostTag>
											)}
											{checkPostAuthor && (
												<div className="dbe-block-post-grid-author">
													<a
														className="dbe-text-link"
														target="_blank"
														href={post.author_info.author_link}
													>
														{post.author_info.display_name}
													</a>
												</div>
											)}
											{checkPostDate && (
												<time
													dateTime={moment(post.date_gmt).utc().format()}
													className={"dbe-block-post-grid-date"}
												>
													{moment(post.date_gmt)
														.local()
														.format("MMMM DD, Y", "dafunda-blocks")}
												</time>
											)}
										</header>
										<div className="dbe-block-post-grid-excerpt">
											{checkPostExcerpt && (
												<div
													dangerouslySetInnerHTML={{
														__html: cateExcerpt(
															post.excerpt.rendered,
															excerptLength
														),
													}}
												/>
											)}
											{checkPostLink && (
												<p>
													<a
														className="dbe-block-post-grid-more-link dbe-text-link"
														href={post.link}
														target="_blank"
														rel="bookmark"
													>
														{readMoreText}
													</a>
												</p>
											)}
										</div>
									</div>
								</>
							</article>
						))}
					</div>
				</SectionTag>
			</>,
		];
	}
}

// cate excerpt
function cateExcerpt(str, no_words) {
	return str.split(" ").splice(0, no_words).join(" ");
}
