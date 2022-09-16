import { useState, useEffect } from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n
import { Card } from "./_components";
import schemaApplicationCategories from "./schemaApplicationCategories.json";
const {
  RichText,
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
  BlockVerticalAlignmentToolbar,
  InspectorAdvancedControls,
} = wp.blockEditor || wp.editor;

const {
  ToggleControl,
  PanelBody,
  RadioControl,
  RangeControl,
  SelectControl,
  TabPanel,
  TextControl,
  ComboboxControl,
} = wp.components;

export function EditorComponent(props) {
  let {
    attributes: { blockID },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    isSelected,
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
    <>
      <InspectorPanel {...props} />
      <Card {...props} />
    </>
  );
}
