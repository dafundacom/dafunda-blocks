import React from 'react'

const { __ } = wp.i18n // Import __() from wp.i18n

export function ButtonAddStep({ onClick, label }) {
  // eslint-disable-next-line no-param-reassign
  if (!label) label = 'Tambah Langkah'
  return (
    <div className='my-12 flex w-full flex-wrap justify-center'>
      <button
        type='button'
        className='rounded-full border bg-transparent px-2 py-1 text-sm  font-thin text-gray-800 ring-gray-500 transition duration-200 ease-in-out hover:bg-slate-400 hover:text-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-500'
        onClick={onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='ml-[1px] mb-[3px] inline-block h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
        {__(label)}
      </button>
    </div>
  )
}
