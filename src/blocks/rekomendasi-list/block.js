import icon from "./icon";
const { __ } = wp.i18n; // Import __() from wp.i18n
import { EditorComponent } from "./components";

const { registerBlockType } = wp.blocks;

const { withSelect } = wp.data;
import attributes from "./attributes";

registerBlockType("dbe/rekomendasi-list", {
  title: __("Rekomendasi List"),
  icon: icon,
  category: "widgets",
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
