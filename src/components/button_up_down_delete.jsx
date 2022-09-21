import React from 'react'

const { __ } = wp.i18n

export function ButtonUpDownDelete({ moveUp, moveDown, deleteStep }) {
  return (
    <div className='absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 overflow-hidden rounded-lg bg-gray-400'>
      <button
        type='button'
        className='bg-gray-400 px-2 py-2 hover:bg-gray-600 hover:text-white'
        icon='arrow-up-alt'
        onClick={() => moveUp()}
        label={__('Move step up')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button
        type='button'
        className='bg-gray-400 px-2 py-2 hover:bg-gray-600 hover:text-white'
        icon='arrow-down-alt'
        onClick={() => moveDown()}
        label={__('Move step down')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button
        type='button'
        className='bg-gray-400 px-2 py-2 hover:bg-red-700 hover:text-white'
        icon='trash'
        label={__('Delete')}
        onClick={() => deleteStep()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </div>
  )
}
