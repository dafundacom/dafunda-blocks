/* eslint-disable no-unused-vars */
const { __ } = wp.i18n;

const {
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
  BlockVerticalAlignmentToolbar,
} = wp.blockEditor || wp.editor;

const { ToggleControl, PanelBody, SelectControl, TabPanel, TextControl } =
  wp.components;

export function InspectorPanel(props) {
  const { setAttributes } = props;

  return (
    <InspectorControls>
      <PanelBody title={__("Filter")}></PanelBody>
    </InspectorControls>
  );
}
