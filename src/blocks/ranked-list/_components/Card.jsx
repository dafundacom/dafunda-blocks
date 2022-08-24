import { ButtonDeleteImage } from "./index";
import { useState, useEffect } from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, MediaUpload } = wp.blockEditor || wp.editor;

export function Card(props) {
  let {
    attributes: { blockID, lists },
    data,
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    isSelected,
    index,
    moveUp,
    moveDown,
    deleteList,
    editList,
  } = props;
  data = validateObj(data);
  let { title, description, imageurl, imagealt, imageid, likes, dislikes } =
    data;
  return (
    <li className="ranked-list-card flex flex-wrap flex-col relative shadow-lg rounded-lg mb-6">
      <div className="absolute top-0 right-[10px] translate-y-[-50%] bg-gray-400 px-2 py-1 grid grid-cols-3 gap-2 rounded-lg text-2xl z-10">
        <button
          className="howto-arrow"
          icon="arrow-up-alt"
          onClick={() => moveUp()}
          label={__("Move step up")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          className="howto-arrow"
          icon="arrow-down-alt"
          onClick={() => moveDown()}
          label={__("Move step down")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          className="howto-delete"
          icon="trash"
          label={__("Delete step")}
          onClick={deleteList}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/7] object-cover object-center w-full overflow-hidden rounded-t-lg">
        {imageurl && imageurl != "" ? (
          <figure>
            <img
              className="w-full"
              src={imageurl}
              // onClick={selectStep}
            />

            <ButtonDeleteImage
              onClick={() => {
                editList({
                  imagealt: "",
                  imageid: "",
                  imageurl: "",
                });
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "rgb(0 0 0 / 54%) -3px -125px 35px -14px inset",
              }}
            ></div>
          </figure>
        ) : (
          <div className="cursor-pointer h-full">
            <MediaUpload
              onSelect={(newImage) => {
                editList({
                  imagealt: newImage?.alt ?? "",
                  imageid: newImage?.id ?? "",
                  imageurl: newImage?.url ?? "",
                });
              }}
              allowedTypes={["image"]}
              value={index}
              render={({ open }) => (
                <>
                  <div
                    className="w-full h-full bg-[#EEEEEE] flex flex-wrap justify-center items-center"
                    onClick={open}
                  >
                    <div className="flex flex-wrap justify-center items-center text-[#999999] flex-col">
                      <i
                        class="fa fa-picture-o text-8xl"
                        aria-hidden="true"
                      ></i>
                      <p className="text-[#999999] m-0">Tambahkan Media</p>
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        )}

        <div className="absolute left-6 bottom-3 flex flex-wrap">
          <h4
            className={`m-0 font-semibold ${
              imageurl && imageurl != "" ? "text-white" : ""
            }`}
          >
            {index + 1}. &nbsp;
          </h4>
          <RichText
            tagName={"h4"}
            keepPlaceholderOnFocus
            placeholder={__("Title")}
            className={`m-0 font-semibold ${
              imageurl && imageurl != "" ? "text-white" : ""
            }`}
            value={title}
            onChange={(title) => editList({ title })}
            // onFocus={selectStep}
          />
        </div>
      </div>
      {/* Image END */}

      {/* Vote Count */}
      <div className="p-5 flex">
        <div className="flex flex-wrap items-start w-fit opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 inline-block translate-y-[-2px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <p className="m-0 ml-1 inline-block font-bold text-xl leading-6">
            {likes.length}
          </p>
        </div>
        <div className="flex flex-wrap items-start w-fit opacity-50 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 inline-block translate-y-[2px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
          <p className="m-0 ml-1 inline-block font-bold text-xl leading-6">
            {dislikes.length}
          </p>
        </div>
      </div>
      {/* Vote Count END */}

      {/* Description */}
      <div className="recomendasi-list-description p-5 pt-0">
        <RichText
          tagName={"p"}
          keepPlaceholderOnFocus
          placeholder={__("Description goes here")}
          className="w-full my-0 text-base"
          value={description}
          onChange={(description) => editList({ description })}
          // onFocus={selectStep}
        />
      </div>
      {/* Description END */}
    </li>
  );
}

function validateObj(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    let o = obj[key];
    if (!o) newObj[key] = "";
    else newObj[key] = obj[key];
  });
  return newObj;
}
