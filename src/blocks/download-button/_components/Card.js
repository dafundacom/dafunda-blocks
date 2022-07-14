import { ButtonDeleteImage } from "./index";
import { useState, useEffect } from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, MediaUpload, BlockControls, URLPopover, URLInput } =
  wp.blockEditor || wp.editor;
const {
  Button,
  ToggleControl,
  CheckboxControl,
  SelectControl,
  Popover,
  ToolbarGroup,
  ToolbarButton,
} = wp.components;

let defaultFormats = [
  "core/annotation",
  "core/bold",
  "core/code",
  "core/italic",
  "core/strikethrough",
  "core/underline",
  "core/text-color",
  "core/subscript",
  "core/superscript",
  "core/keyboard",
  "dafunda-blocks/highlight",
];

export function Card(props) {
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
    },
    setAttributes,
    isSelected,
  } = props;

  const [buttonOnHover, setButtonOnHover] = useState(false);

  return (
    <div className="download-button rounded-lg border border-slate-200 p-3 flex flex-wrap overflow-hidden">
      <ToolbarCard {...props} />

      {/* Image */}
      <div className="basis-2/12">
        {imageurl && imageurl != "" ? (
          <figure className="relative">
            <img
              className="w-full aspect-square rounded-lg"
              src={imageurl}
              // onClick={selectStep}
            />

            <ButtonDeleteImage
              onClick={() => {
                setAttributes({
                  imagealt: "",
                  imageid: "",
                  imageurl: "",
                });
              }}
            />
          </figure>
        ) : (
          <div className="cursor-pointer w-full aspect-square">
            <MediaUpload
              onSelect={(newImage) => {
                setAttributes({
                  imagealt: newImage?.alt ?? "",
                  imageid: newImage?.id ?? "",
                  imageurl: newImage?.url ?? "",
                });
              }}
              allowedTypes={["image"]}
              render={({ open }) => (
                <>
                  <div
                    className="w-full h-full bg-[#EEEEEE] flex flex-wrap justify-center items-center"
                    onClick={open}
                  >
                    <div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-[#999999] m-0 text-xs">
                        Tambahkan Media
                      </p>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        )}
      </div>
      {/* Image END */}

      {/* Title and Description */}
      <div className="basis-auto md:basis-7/12 ml-3">
        <RichText
          tagName={"p"}
          multiline={false}
          keepPlaceholderOnFocus
          placeholder={__("Title")}
          className={`m-0 text-lg font-semibold`}
          value={title}
          allowedFormats={defaultFormats}
          onChange={(title) => setAttributes({ title })}
        />
        <RichText
          tagName={"p"}
          allowedFormats={defaultFormats}
          multiline={false}
          keepPlaceholderOnFocus
          placeholder={__("Descriptions")}
          className={`m-0 text-sm`}
          value={description}
          onChange={(description) => setAttributes({ description })}
        />
      </div>
      {/* Title and Description END */}

      {/* Button */}
      <Button
        aria-expanded={true}
        aria-haspopup="true"
        onMouseEnter={() => setButtonOnHover(true)}
        onMouseLeave={() => setButtonOnHover(false)}
        className={`mt-3 md:mt-0 py-2 px-5 mx-auto md:ml-auto w-fit h-fit text-base font-bold text-white
				${
          buttonAlign == "top"
            ? "self-start"
            : buttonAlign == "bottom"
            ? "self-end"
            : "self-center"
        }
				${buttonRounded ? "rounded-lg" : ""}
				`}
        style={{
          backgroundColor: buttonOnHover ? buttonHoverColor : buttonColor,
        }}
      >
        <RichText
          tagName={"span"}
          multiline={false}
          keepPlaceholderOnFocus
          placeholder={__("Download")}
          className={`m-0`}
          allowedFormats={defaultFormats}
          // withoutInteractiveFormatting={true}
          style={{
            color: buttonOnHover ? buttonTextHoverColor : buttonTextColor,
          }}
          value={buttonText}
        />
      </Button>
      {/* Button END */}
    </div>
  );
}

function ToolbarCard(props) {
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
      buttonTextHoverColor,
      buttonRounded,
      addNofollow,
      openInNewTab,
      buttonAlign,
      addSponsored,
    },
    setAttributes,
    isSelected,
  } = props;

  const [URLPopoverisVisible, setURLPopoverisVisible] = useState(false);

  if (!isSelected && URLPopoverisVisible) {
    setURLPopoverisVisible(false);
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="admin-links"
            label={__("Add button link")}
            onClick={() => setURLPopoverisVisible(true)}
          />
        </ToolbarGroup>
      </BlockControls>

      {URLPopoverisVisible && (
        <Popover className="popover" position="bottom">
          <div className="button_popover">
            <div className="button_url_input">
              <form
                onSubmit={(event) => event.preventDefault()}
                className={`editor-format-toolbar__link-modal-line button_input_box flex-container`}
              >
                <URLInput
                  autoFocus={false}
                  multiline={false}
                  className="button-url"
                  value={url}
                  onChange={(url) => setAttributes({ url })}
                />
              </form>
            </div>
            <CheckboxControl
              label={__("Open Link in New Tab", "dafunda-blocks")}
              checked={openInNewTab}
              onChange={(openInNewTab) => setAttributes({ openInNewTab })}
            />
            <CheckboxControl
              label={__("Add Nofollow to Link", "dafunda-blocks")}
              checked={addNofollow}
              onChange={(addNofollow) => setAttributes({ addNofollow })}
            />
            <CheckboxControl
              label={__("Mark link as sponsored", "dafunda-blocks")}
              checked={addSponsored}
              onChange={(addSponsored) => setAttributes({ addSponsored })}
            />
          </div>
        </Popover>
      )}
    </>
  );
}
