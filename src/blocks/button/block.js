/**
 * BLOCK: Button Block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icon
import icon from "./icons/icons";

import {
  version_1_1_2,
  version_1_1_4,
  version_1_1_5,
  version_2_0_0,
  oldAttributes,
  updateFrom,
} from "./oldVersions";

import {
  generateIcon,
  dashesToCamelcase,
  mergeRichTextArray,
  upgradeButtonLabel,
} from "../../common";
import {
  blockControls,
  inspectorControls,
  editorDisplay,
  iconSize,
  allIcons,
  EditorComponent,
} from "./components";

const { withDispatch, withSelect } = wp.data;

const { withState, compose } = wp.compose;
const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;

const attributes = {
  blockID: {
    type: "string",
    default: "",
  },
  buttonText: {
    type: "string",
    default: "Button Text",
  },
  align: {
    type: "string",
    default: "",
  },
  url: {
    type: "string",
    default: "",
  },
  size: {
    type: "string",
    default: "medium",
  },
  buttonColor: {
    type: "string",
    default: "#313131",
  },
  buttonHoverColor: {
    type: "string",
    default: "#313131",
  },
  buttonTextColor: {
    type: "string",
    default: "#ffffff",
  },
  buttonTextHoverColor: {
    type: "string",
    default: "#ffffff",
  },
  buttonRounded: {
    type: "boolean",
    default: false,
  },
  chosenIcon: {
    type: "string",
    default: "",
  },
  iconPosition: {
    type: "string",
    default: "left",
  },
  buttonIsTransparent: {
    type: "boolean",
    default: false,
  },
  addNofollow: {
    type: "boolean",
    default: true,
  },
  openInNewTab: {
    type: "boolean",
    default: true,
  },
  buttonWidth: {
    type: "string",
    default: "fixed",
  },
  buttons: {
    type: "array",
    default: [],
  },
};

let block_name = "dbe/button";
let block_config = dafunda_blocks.filter((con) => con.name == block_name);
if (block_config[0] && block_config[0].active) {
  registerBlockType(block_name, {
    title: __("Button", "dafunda-blocks"),
    icon: icon,
    category: "dafundablocks",
    attributes,
    keywords: [
      __("Button", "dafunda-blocks"),
      __("Buttons", "dafunda-blocks"),
      __("Dafunda Blocks", "dafunda-blocks"),
    ],
    edit: withSelect((select, ownProps) => {
      const { getBlock, getBlockRootClientId, getClientIdsWithDescendants } =
        select("core/block-editor") || select("core/editor");

      return {
        getBlock,
        block: getBlock(ownProps.clientId),
        parentID: getBlockRootClientId(ownProps.clientId),
        getClientIdsWithDescendants,
      };
    })(EditorComponent),
    save: () => null,
  });
}
