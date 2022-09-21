import React from 'react'
const { __ } = wp.i18n // Import __() from wp.i18n

export const ButtonAddStep = function ({ onClick, label }) {
  if (!label) label = 'Tambah Langkah'
  return (
    <>
      <div className='my-12 flex w-full flex-wrap justify-center'>
        <button
          className='rounded-full border bg-transparent px-2 py-1 text-sm  font-thin text-gray-800 ring-gray-500 transition duration-200 ease-in-out hover:bg-slate-400 hover:text-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-500'
          onClick={onClick}
        >
          <i class='fa fa-plus mr-2' aria-hidden='true'></i>
          {__(label)}
        </button>
      </div>
    </>
  )
}
