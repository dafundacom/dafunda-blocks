import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useEffect } from "react";
import { InspectorPanel, Card } from "./components";

export default function Edit(props) {
  const {
    attributes: { blockID },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
  } = props;

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

  return (
    <div {...useBlockProps()}>
      <InspectorPanel {...props} />
      <div className="wp-block">
        <Card {...props} />
      </div>
    </div>
  );
}
