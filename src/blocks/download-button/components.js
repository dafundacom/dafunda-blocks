import { useState, useEffect } from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n
import { Card } from "./_components";

const { RichText, MediaUpload, InspectorControls, PanelColorSettings } =
  wp.blockEditor || wp.editor;

const {
  ToggleControl,
  PanelBody,
  RadioControl,
  RangeControl,
  SelectControl,
  TabPanel,
} = wp.components;
import {
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from "@wordpress/components";

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

function InspectorPanel(props) {
  let {
    attributes: {
      title,
      description,
      titleTag,
      imageurl,
      imageid,
      imagealt,
      url,
      buttonText,
      buttonColor,
      buttonHoverColor,
      buttonTextColor,
      buttonTextHoverColor,
      buttonRounded,
      addNofollow,
      openInNewTab,
      buttonAlign,
      addSponsored,
    },
    setAttributes,
  } = props;

  const makeNormalColorPanels = () => [
    {
      value: buttonColor,
      onChange: (buttonColor) => setAttributes({ buttonColor }),
      label: __("Button Color"),
    },
    ...[
      {
        value: buttonTextColor,
        onChange: (buttonTextColor) => setAttributes({ buttonTextColor }),
        label: __("Button Text Color"),
      },
    ],
  ];
  const makeHoverColorPanels = () => [
    {
      value: buttonHoverColor,
      onChange: (buttonHoverColor) => setAttributes({ buttonHoverColor }),
      label: __("Button Color"),
    },
    ...[
      {
        value: buttonTextHoverColor,
        onChange: (buttonTextHoverColor) =>
          setAttributes({ buttonTextHoverColor }),
        label: __("Button Text Color"),
      },
    ],
  ];

  const tagList = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "strong"];

  return (
    <InspectorControls>
      <PanelBody title={__("Button Setting")}>
        <RadioGroup
          id={`buttonAlign`}
          label="Button Align"
          onChange={(buttonAlign) => setAttributes({ buttonAlign })}
          checked={buttonAlign}
        >
          <label htmlFor={`buttonAlign`} className={`block mb-2`}>
            Button Align
          </label>
          <Radio value="top">Top</Radio>
          <Radio value="center">Center</Radio>
          <Radio value="bottom">Bottom</Radio>
        </RadioGroup>
      </PanelBody>

      <PanelBody title={__("Button Style", "dafunda-blocks")}>
        <ToggleControl
          label={__("Rounded", "dafunda-blocks")}
          checked={buttonRounded}
          onChange={(buttonRounded) => setAttributes({ buttonRounded })}
        />
      </PanelBody>

      <PanelBody title={__("Tag Settings")}>
        <SelectControl
          label={__("Title tag")}
          value={titleTag}
          options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
          onChange={(titleTag) => setAttributes({ titleTag })}
        />
      </PanelBody>

      <TabPanel
        tabs={[
          {
            name: "buttoncolor",
            title: __("Normal"),
          },
          {
            name: "buttonhovercolor",
            title: __("Hover"),
          },
        ]}
      >
        {(tab) => (
          <PanelColorSettings
            title={__("Button Colors", "dafunda-blocks")}
            initialOpen={true}
            colorSettings={
              tab.name === "buttoncolor"
                ? makeNormalColorPanels()
                : makeHoverColorPanels()
            }
          />
        )}
      </TabPanel>
    </InspectorControls>
  );
}
