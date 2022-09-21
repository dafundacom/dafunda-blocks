import React from 'react'

const { __ } = wp.i18n // Import __() from wp.i18n

export const ButtonDeleteImage = ({ onClick }) => {
  return (
    <span
      title={__('Delete image')}
      className='dashicons dashicons-trash absolute right-[10px] top-[10px] h-auto w-auto cursor-pointer rounded-lg bg-gray-900 p-1 text-base leading-none text-white transition duration-200 ease-in-out hover:bg-gray-800'
      onClick={onClick}
    />
  )
}
