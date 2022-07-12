import icon from "./icon";
import { EditorComponent } from "./components";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;

const { withDispatch, withSelect } = wp.data;
import attributes from "./attributes";

registerBlockType("dbe/how-to", {
  title: __("How To"),
  icon: icon,
  category: "dafundablocks",
  keywords: [__("Tutorial"), __("How To"), __("Dafunda Blocks")],
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
