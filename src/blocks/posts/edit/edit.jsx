/* eslint-disable no-unused-vars */
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import { InspectorPanel } from "./components/inspector_panel";
import CardWrapper from "./components/cards/wrapper";

export default function Edit(props) {
  const {
    attributes: {
      blockID,

      // Query
      post_type,
      offset,
      page,
      posts_per_page,
      orderby,
      order,
    },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
  } = props;

  const [posts, set_posts] = useState([]);

  useEffect(() => {
    if (
      blockID === "" ||
      getClientIdsWithDescendants().some(
        (ID) =>
          "blockID" in getBlock(ID).attributes &&
          getBlock(ID).attributes.blockID === blockID
      )
    ) {
      setAttributes({ blockID: block.clientId });
    }
  }, []);

  useEffect(() => {
    const path = "/wp-json/dbe/v1/posts";
    const url = location.origin + path;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        post_type,
        offset,
        page,
        posts_per_page,
        orderby,
        order,
      }),
      headers: {
        Accept: "application/json, text-plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        url: url,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        set_posts(response.posts);
      })
      .catch((err) => {
        console.warn("Something went wrong.", err);
      });
  }, [post_type, offset, page, posts_per_page, orderby, order]);

  useEffect(() => {
    console.log("posts", posts);
  }, [posts]);

  return (
    <div {...useBlockProps()}>
      <InspectorPanel {...props} />
      <div className="wp-block">
        <div className="flex flex-col flex-wrap gap-2">
          {posts &&
            Array.isArray(posts) &&
            posts.length > 0 &&
            posts.map((post, index) => {
              return <CardWrapper key={index} {...props} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}
