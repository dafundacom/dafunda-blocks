import React from "react";
const { __ } = wp.i18n; // Import __() from wp.i18n

export const ButtonAddStep = function ({ onClick, label }) {
  if (!label) label = "Tambah Langkah";
  return (
    <>
      <div className="w-full flex flex-wrap justify-center my-12">
        <button
          className="text-gray-800 hover:text-gray-50 bg-transparent border hover:bg-slate-400 ring-gray-500  focus:ring-4 focus:ring-gray-500 font-thin text-sm px-2 py-1 focus:outline-none rounded-full transition duration-200 ease-in-out"
          onClick={onClick}
        >
          <i class="fa fa-plus mr-2" aria-hidden="true"></i>
          {__(label)}
        </button>
      </div>
    </>
  );
};
