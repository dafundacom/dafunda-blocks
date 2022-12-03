import React from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n
import PlusCircle from "../icons/plus-circle";

export function ButtonAddStep2({ onClick, label }) {
  // eslint-disable-next-line no-param-reassign
  if (!label) label = "Tambah Langkah";
  return (
    <div
      className="flex h-10 w-full cursor-pointer flex-wrap items-center justify-center rounded-md border border-dashed border-slate-400 duration-200 hover:scale-[1.03] hover:border-solid hover:border-slate-900"
      onClick={onClick}
    >
      <PlusCircle />
    </div>
  );
}
