/* eslint-disable no-unused-vars */

import HorizontalCard from "./horizontal";

export default function WrapperCard(props) {
  const { setAttributes, post } = props;

  const postData = {
    url: post.guid,
    title: post.post_title,
    excerpt: post.post_excerpt,
    date: post.post_date,
    comment_count: post.comment_count,
    image: post.thumbnails.medium_large,
    author: post.author,
  };
  return (
    <div className="">
      <HorizontalCard {...props} post={postData} />
    </div>
  );
}
