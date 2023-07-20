/* eslint-disable no-unused-vars */

import { useState } from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
  BlockVerticalAlignmentToolbar,
} = wp.blockEditor || wp.editor;

import {
  MediaUpload,
  __experimentalColorGradientControl as ColorGradientControl,
} from "@wordpress/block-editor";
import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  Placeholder,
  Button,
} from "@wordpress/components";

import { arrowDown } from "@wordpress/icons";
import { ButtonDeleteImage } from "../../../button-download/edit/components";
import Scheme from "./panel/scheme";

const { ToggleControl, PanelBody, SelectControl, TabPanel, TextControl } =
  wp.components;

export const InspectorPanel = (props) => {
  const {
    attributes: {
      background_used,
      background_color,
      background_gradient,
      background_image,
    },
    setAttributes,
  } = props;

  const [colorValue, setColorValue] = useState("#f00");
  const [gradientValue, setGradientValue] = useState(
    "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  );
  return (
    <InspectorControls>
      <PanelBody title={__("Background")}>
        <div className="review-inspector-control">
          <ToggleGroupControl
            label="Choice background"
            value={background_used}
            isBlock
            onChange={(newValue) => {
              // console.log({ newValue });
              setAttributes({ background_used: newValue });
            }}
          >
            <ToggleGroupControlOption value="color" label="Color" />
            <ToggleGroupControlOption value="gradient" label="Gradient" />
            <ToggleGroupControlOption value="image" label="Image" />
          </ToggleGroupControl>

          {background_used == "color" ? (
            <ColorGradientControl
              colorValue={background_color}
              colors={[
                { name: "red", color: "#f00" },
                { name: "white", color: "#fff" },
                { name: "blue", color: "#00f" },
              ]}
              onColorChange={(newValue) => {
                // setColorValue(newValue);
                setAttributes({ background_color: newValue });
              }}
            />
          ) : (
            ""
          )}
          {background_used == "gradient" ? (
            <ColorGradientControl
              gradientValue={background_gradient}
              gradients={[
                {
                  name: "Witching hour",
                  gradient: "linear-gradient(to right, #c31432, #240b36)",
                  slug: "red-to-black",
                },
                {
                  name: "Vivid cyan blue to vivid purple",
                  gradient:
                    "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
                  slug: "vivid-cyan-blue-to-vivid-purple",
                },
                {
                  name: "Light green cyan to vivid green cyan",
                  gradient:
                    "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
                  slug: "light-green-cyan-to-vivid-green-cyan",
                },
                {
                  name: "Luminous vivid amber to luminous vivid orange",
                  gradient:
                    "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
                  slug: "luminous-vivid-amber-to-luminous-vivid-orange",
                },
                {
                  name: "Luminous vivid orange to vivid red",
                  gradient:
                    "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
                  slug: "luminous-vivid-orange-to-vivid-red",
                },
                {
                  name: "Very light gray to cyan bluish gray",
                  gradient:
                    "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
                  slug: "very-light-gray-to-cyan-bluish-gray",
                },
                {
                  name: "Cool to warm spectrum",
                  gradient:
                    "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
                  slug: "cool-to-warm-spectrum",
                },
              ]}
              onGradientChange={(newValue) => {
                // setGradientValue(newValue);
                setAttributes({ background_gradient: newValue });
              }}
            />
          ) : (
            ""
          )}
          {background_used == "image" ? (
            <div>
              {background_image && background_image != "" ? (
                <figure className="relative">
                  <img
                    className="aspect-square w-full rounded-lg object-cover object-center"
                    src={background_image}
                  />
                  <ButtonDeleteImage
                    onClick={() => {
                      setAttributes({
                        // imagealt: "",
                        // imageid: "",
                        // imageurl: "",
                        background_image: "",
                      });
                    }}
                  />
                </figure>
              ) : (
                <div className="aspect-square w-full cursor-pointer">
                  <MediaUpload
                    onSelect={(newImage) => {
                      setAttributes({
                        // imagealt: newImage?.alt ?? "",
                        // imageid: newImage?.id ?? "",
                        // imageurl: newImage?.url ?? "",
                        background_image: newImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <div
                        className="flex h-full w-full flex-wrap items-center justify-center bg-[#EEEEEE]"
                        onClick={open}
                      >
                        <div className="flex flex-col flex-wrap items-center justify-center text-[#999999]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p className="m-0 text-xs text-[#999999]">
                            Tambahkan Media
                          </p>
                        </div>
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </PanelBody>

      <Scheme {...props} />
    </InspectorControls>
  );
};
