import React from 'react'

const { __ } = wp.i18n

export function ButtonDeleteImage({ onClick }) {
  return (
    <span
      title={__('Delete image')}
      className='dashicons dashicons-trash absolute top-5 right-5 flex aspect-square h-12 w-12 cursor-pointer flex-wrap items-center justify-center rounded-lg bg-gray-800 p-2 text-2xl text-white hover:bg-gray-900'
      onClick={onClick}
      aria-hidden='true'
    />
  )
}
