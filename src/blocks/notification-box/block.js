/**
 * BLOCK: dafunda-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icons
import icon from "./icons/icon";

import {
  version_1_1_2,
  version_1_1_4,
  version_1_1_5,
  oldAttributes,
  updateFrom,
} from "./oldVersions";
import { blockControls, editorDisplay, upgradeToStyledBox } from "./components";
import { mergeRichTextArray, upgradeButtonLabel } from "../../common";

const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;

const { RichText } = wp.blockEditor || wp.editor;
const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;

const attributes = {
  blockID: {
    type: "string",
    default: "",
  },
  notify_info: {
    type: "string",
    default: "",
  },
  selected_notify: {
    type: "string",
    default: "notify_info",
  },
  align: {
    type: "string",
    default: "left",
  },
};

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("dbe/notification-box", {
  title: __("Notification Box"),
  icon: icon,
  category: "dafundablocks",
  keywords: [__("notification"), __("warning info"), __("Dafunda Blocks")],
  attributes: oldAttributes,
  supports: { inserter: false },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: compose([
    withSelect((select, ownProps) => ({
      block: (select("core/block-editor") || select("core/editor")).getBlock(
        ownProps.clientId
      ),
    })),
    withDispatch((dispatch) => ({
      replaceBlock: (dispatch("core/block-editor") || dispatch("core/editor"))
        .replaceBlock,
    })),
  ])(function (props) {
    const { isSelected, className, attributes, replaceBlock, block } = props;

    return [
      isSelected && blockControls(props),

      <div className={className}>
        <button
          onClick={() => {
            const { notify_info } = attributes;
            let firstColor;
            let secondColor;
            switch (attributes.selected_notify) {
              case "notify_success":
                [firstColor, secondColor] = ["#3c763d", "#dff0d8"];
                break;
              case "notify_warning":
                [firstColor, secondColor] = ["#d8000c", "#ffd2d2"];
                break;
              case "notify_info":
              default:
                [firstColor, secondColor] = ["#31708f", "#d9edf7"];
                break;
            }
            replaceBlock(
              block.clientId,
              createBlock("dbe/styled-box", {
                mode: "notification",
                text: [mergeRichTextArray(notify_info)],
                textAlign: [attributes.align],
                backColor: secondColor,
                foreColor: firstColor,
                outlineColor: firstColor,
              })
            );
          }}
        >
          {upgradeButtonLabel}
        </button>
        {editorDisplay(props)}
      </div>,
    ];
  }),

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function (props) {
    const { align, notify_info, selected_notify } = props.attributes;
    return (
      <div className={props.className}>
        <div className={selected_notify}>
          <RichText.Content
            tagName="p"
            className={"notify_text"}
            style={{ textAlign: align }}
            value={notify_info}
          />
        </div>
      </div>
    );
  },
  deprecated: [
    updateFrom(version_1_1_2),
    {
      attributes: {
        notify_info: {
          type: "array",
          source: "children",
          selector: "p",
        },
        selected_notify: {
          type: "string",
          default: "notify_info",
        },
        align: {
          type: "string",
          default: "left",
        },
      },
      save: version_1_1_4,
    },
    updateFrom(version_1_1_5),
  ],
});

registerBlockType("dbe/notification-box-block", {
  title: __("Notification Box"),
  icon: icon,
  category: "dafundablocks",
  keywords: [__("notification"), __("warning info"), __("Dafunda Blocks")],
  attributes,
  supports: {
    inserter: false,
  },

  transforms: {
    to: [
      {
        type: "block",
        blocks: "dbe/styled-box",
        transform: (attributes) => upgradeToStyledBox(attributes),
      },
    ],
  },
  edit: compose([
    withSelect((select, ownProps) => ({
      block: (select("core/block-editor") || select("core/editor")).getBlock(
        ownProps.clientId
      ),
    })),
    withDispatch((dispatch) => ({
      replaceBlock: (dispatch("core/block-editor") || dispatch("core/editor"))
        .replaceBlock,
    })),
  ])(function (props) {
    const { isSelected, className, block, replaceBlock, attributes } = props;

    if (attributes.blockID === "") {
      props.setAttributes({ blockID: block.clientId });
    }

    return [
      isSelected && blockControls(props),
      <div className={className}>
        <button
          onClick={() =>
            replaceBlock(block.clientId, upgradeToStyledBox(attributes))
          }
        >
          {upgradeButtonLabel}
        </button>
        {editorDisplay(props)}
      </div>,
    ];
  }),
  save: () => null,
});
