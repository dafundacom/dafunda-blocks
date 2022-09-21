import { useState, useEffect } from 'react'
import { ButtonDeleteImage } from './index'

import { ReactComponent as IconShopee } from '../../icons/IconShopee.svg'
import { ReactComponent as IconLazada } from '../../icons/IconLazada.svg'
import { ReactComponent as IconTokopedia } from '../../icons/IconTokopedia.svg'
import { ReactComponent as IconBukalapak } from '../../icons/IconBukalapak.svg'

const { __ } = wp.i18n // Import __() from wp.i18n
const { RichText, MediaUpload } = wp.blockEditor || wp.editor

export function Card(props) {
  const {
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
  } = props

  const {
    title,
    subtitle,
    description,
    imageurl,
    imagealt,
    imageid,
    olshops,
    price,
    pricetag,
  } = data

  const olshops_lists = [
    {
      name: 'Tokopedia',
      slug: 'tokopedia',
      logo: <IconTokopedia />,
    },
    {
      name: 'Shopee',
      slug: 'shopee',
      logo: <IconShopee />,
    },
    {
      name: 'Lazada',
      slug: 'lazada',
      logo: <IconLazada />,
    },
    {
      name: 'Bukalapak',
      slug: 'bukalapak',
      logo: <IconBukalapak />,
    },
  ]

  function ChoiceIcon({ name }) {
    return olshops_lists.filter((olshops_list) => olshops_list.name == name)[0]
      .logo
  }

  function addOlshopForm(e) {
    e.preventDefault()
    const form = e.target
    const olshops_list = olshops_lists.filter(
      (ol) => ol.slug == form.olshop.value,
    )[0]
    editList({
      olshops: [
        ...olshops,
        {
          name: olshops_list.name,
          slug: form.olshop.value,
          url: form.url.value,
        },
      ],
    })

    form.url.value = ''
  }

  function editOlshopForm(index, url, olshop) {
    const newOlshops = [...olshops]
    newOlshops[index].url = url.target.value
    console.log('newOlshops', newOlshops)
    editList({ olshops: newOlshops })
  }

  return (
    <li className='rekomendasi-list-card relative mb-6 flex flex-col flex-wrap rounded-lg shadow-lg'>
      <div className='absolute top-0 right-[10px] z-10 grid translate-y-[-50%] grid-cols-3 gap-2 rounded-lg bg-gray-400 px-2 py-1 text-2xl'>
        <button
          className='howto-arrow'
          icon='arrow-up-alt'
          onClick={() => moveUp()}
          label={__('Move step up')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button
          className='howto-arrow'
          icon='arrow-down-alt'
          onClick={() => moveDown()}
          label={__('Move step down')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button
          className='howto-delete'
          icon='trash'
          label={__('Delete step')}
          onClick={deleteList}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className='relative aspect-[16/7] w-full overflow-hidden rounded-t-lg object-cover object-center'>
        {imageurl && imageurl != '' ? (
          <figure>
            <img
              className=''
              src={imageurl}
              // onClick={selectStep}
            />

            <ButtonDeleteImage
              onClick={() => {
                editList({
                  imagealt: '',
                  imageid: '',
                  imageurl: '',
                })
              }}
            />
            <div
              className='absolute inset-0'
              style={{
                boxShadow: 'rgb(0 0 0 / 54%) -3px -125px 35px -14px inset',
              }}
            />
          </figure>
        ) : (
          <div className='h-full cursor-pointer'>
            <MediaUpload
              onSelect={(newImage) => {
                editList({
                  imagealt: newImage?.alt ?? '',
                  imageid: newImage?.id ?? '',
                  imageurl: newImage?.url ?? '',
                })
              }}
              allowedTypes={['image']}
              value={index}
              render={({ open }) => (
                <div
                  className='flex h-full w-full flex-wrap items-center justify-center bg-[#EEEEEE]'
                  onClick={open}
                >
                  <div className='flex flex-col flex-wrap items-center justify-center text-[#999999]'>
                    <i
                      className='fa fa-picture-o text-8xl'
                      aria-hidden='true'
                    />
                    <p className='m-0 text-[#999999]'>Tambahkan Media</p>
                  </div>
                </div>
              )}
            />
          </div>
        )}

        <div className='absolute left-6 bottom-3 flex flex-wrap'>
          <h4
            className={`m-0 font-semibold ${
              imageurl && imageurl != '' ? 'text-white' : ''
            }`}
          >
            {index + 1}. &nbsp;
          </h4>
          <RichText
            tagName='h4'
            keepPlaceholderOnFocus
            placeholder={__('Title')}
            className={`m-0 font-semibold ${
              imageurl && imageurl != '' ? 'text-white' : ''
            }`}
            value={title}
            onChange={(title) => editList({ title })}
            // onFocus={selectStep}
          />

          <RichText
            tagName='p'
            keepPlaceholderOnFocus
            placeholder={__('Subtitle')}
            className={`m-0 w-full ${
              imageurl && imageurl != '' ? 'text-white' : ''
            }`}
            value={subtitle}
            onChange={(subtitle) => editList({ subtitle })}
            // onFocus={selectStep}
          />
        </div>
      </div>

      {/* Price */}
      <div className='flex flex-wrap p-5 pb-0'>
        <input
          type='text'
          placeholder='Price Tag'
          className=''
          value={pricetag ?? 'Rp'}
          onChange={(e) => editList({ pricetag: e.target.value })}
        />
        <input
          type='text'
          placeholder='Price'
          className='grow'
          value={price}
          onChange={(e) => editList({ price: e.target.value })}
        />
      </div>
      {/* Price END */}

      {/* Olshop Link */}
      <div className='p-5'>
        <form className='mb-3 flex flex-wrap' onSubmit={addOlshopForm}>
          <input
            type='text'
            placeholder='URL'
            className='grow rounded-r-none'
            name='url'
          />
          <select className='rounded-none' name='olshop'>
            {olshops_lists.map((olshops_list, olshops_lists_i) => (
              <option value={olshops_list.slug} key={olshops_lists_i}>
                {olshops_list.name}
              </option>
            ))}
          </select>
          <button
            type='submit'
            className='inline-block rounded rounded-l-none bg-gray-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg'
          >
            Add Olshop
          </button>
        </form>

        <div className='mb-3'>
          {olshops.map((olshop, olshop_i) => (
            <div className='flex flex-wrap border-b' key={olshop_i}>
              <div className='flex aspect-square flex-wrap items-center justify-center px-[11px]'>
                <ChoiceIcon name={olshop.name} />
              </div>
              <input
                type='text'
                placeholder='URL'
                className='grow rounded-r-none border-0'
                value={olshop.url}
                onChange={(value) => editOlshopForm(olshop_i, value, olshop)}
              />
              <button
                type='button'
                className='inline-block rounded rounded-l-none bg-red-800 px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-900 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg'
                // onClick={() => editList({olshops: olshops.splice(olshop_i, 1)})}
                onClick={() =>
                  editList({
                    olshops: [
                      ...olshops.slice(0, olshop_i),
                      ...olshops.slice(olshop_i + 1, olshops.length),
                    ],
                  })
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-3'>
          {olshops.map((olshop, olshop_i) => (
            <a
              href={olshop.url}
              className='flex items-center justify-center rounded-lg bg-[#EEEEEE] py-2 text-sm font-bold'
              key={olshop_i}
            >
              <ChoiceIcon name={olshop.name} />
              {olshop.name}
            </a>
          ))}
        </div>
      </div>
      {/* Olshop Description */}
      <div className='recomendasi-list-description p-5 pt-0'>
        <RichText
          tagName='p'
          keepPlaceholderOnFocus
          placeholder={__('Description goes here')}
          className='my-0 w-full font-normal'
          value={description}
          onChange={(description) => editList({ description })}
          // onFocus={selectStep}
        />
      </div>

      <div className='p-5 pt-0'>
        <input
          className='w-full'
          type='text'
          name='url'
          onChange={(e) => editList({ url: e.target.value })}
          placeholder={__('Link for the product')}
        />
      </div>
    </li>
  )
}
