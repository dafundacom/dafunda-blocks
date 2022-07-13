import { useState, useEffect } from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n
import { Card } from "./_components";

const {
  RichText,
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
  BlockVerticalAlignmentToolbar,
} = wp.blockEditor || wp.editor;

const {
  ToggleControl,
  PanelBody,
  RadioControl,
  RangeControl,
  SelectControl,
  TabPanel,
  TextControl,
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

function InspectorPanel(props) {
  let {
    attributes: {
      title,
      description,
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

      version,
      system,
      fileSize,
      license,
      developer,
      currency,
      price,
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
      <PanelBody title={__("Download Button Setting")}>
        <TextControl
          label="version"
          labelPosition="top"
          // placeholder="0.0.1"
          value={version}
          type="text"
          className={`capitalize mb-4`}
          onChange={(version) => {
            setAttributes({ version });
          }}
        />

        <TextControl
          label="system"
          labelPosition="top"
          placeholder="Android"
          value={system}
          type="text"
          className={`capitalize mb-4`}
          onChange={(system) => setAttributes({ system })}
        />

        <TextControl
          label="file size"
          labelPosition="top"
          placeholder="7 MB"
          value={fileSize}
          type="text"
          className={`capitalize mb-4`}
          onChange={(fileSize) => setAttributes({ fileSize })}
        />

        <TextControl
          label="license"
          labelPosition="top"
          placeholder="Freeware"
          value={license}
          type="text"
          className={`capitalize mb-4`}
          onChange={(license) => setAttributes({ license })}
        />

        <TextControl
          label="developer"
          labelPosition="top"
          placeholder="Moon & Sun"
          value={developer}
          type="text"
          className={`capitalize mb-4`}
          onChange={(developer) => setAttributes({ developer })}
        />

        <TextControl
          label="currency"
          labelPosition="top"
          placeholder="USD"
          value={currency}
          type="text"
          className={`capitalize mb-4`}
          onChange={(currency) => setAttributes({ currency })}
        />

        <TextControl
          label="price"
          labelPosition="top"
          placeholder="5.12 or 6"
          value={price}
          type="text"
          className={`capitalize mb-4`}
          onChange={(price) => setAttributes({ price })}
        />
      </PanelBody>

      <PanelBody title={__("Button Style", "dafunda-blocks")}>
        <div
          {...useBlockProps({
            style: { backgroundPosition: `center ${buttonAlign}` },
            className: "m-0 mb-4",
          })}
        >
          <label className={`block mb-2`}>Button Align</label>
          <BlockVerticalAlignmentToolbar
            value={buttonAlign}
            onChange={(buttonAlign) => {
              setAttributes({ buttonAlign });
            }}
          />
        </div>

        <div>
          <label className={`block mb-2`}>Button Rounded</label>
          <ToggleControl
            label={__("Button Rounded", "dafunda-blocks")}
            checked={buttonRounded}
            onChange={(buttonRounded) => setAttributes({ buttonRounded })}
          />
        </div>
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
