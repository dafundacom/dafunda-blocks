import React from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n

export function ButtonDeleteImage({ onClick }) {
  return (
    <span
      title={__("Delete image")}
      className="dashicons dashicons-trash cursor-pointer absolute right-[20px] top-[20px] text-white bg-gray-900 hover:bg-gray-800 text-xl p-2 w-auto h-auto rounded-lg leading-none transition duration-200 ease-in-out"
      onClick={onClick}
    />
  );
}
