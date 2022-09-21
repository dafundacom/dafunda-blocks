/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */
import { useEffect } from 'react'

import { InputUpload, ListWrapper, HowToSection, HowToStep } from './index'

import { ButtonDeleteImage } from '../../../../components/button_delete_image'
import { ButtonAddStep } from '../../../../components/button_add_step'

const { __ } = wp.i18n // Import __() from wp.i18n

const { RichText, MediaUpload } = wp.blockEditor || wp.editor

const { TextControl } = wp.components

// import config from '../../config.mjs'
// const defaultAttr = config.attributes

const units = ['Tahun', 'Bulan', 'Minggu', 'Hari', 'Jam', 'Menit', 'Detik']

const moveElement = (array, from, to) => {
  const copy = [...array]
  const valueToMove = copy.splice(from, 1)[0]
  copy.splice(to, 0, valueToMove)
  return copy
}

export function HowTo(props) {
  const {
    attributes,
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    isSelected,
    states,
    setStates,
  } = props

  const {
    blockID,
    title,
    introduction,
    advancedMode,
    section,
    sectionListStyle,
    suppliesIntro,
    supplies,
    suppliesListStyle,
    toolsIntro,
    tools,
    toolsListStyle,
    howToYield,
    _howToRatingValue,
    _howToRatingCount,
    howToLikeCount,
    howToDisikeCount,
    howToVoteCount,
    cost,
    costCurrency,
    costDisplayText,
    showUnitFirst,
    timeIntro,
    totalTime,
    totalTimeText,
    useSections,
    includeToolsList,
    addToolImages,
    includeSuppliesList,
    addSupplyImages,
    resultIntro,
    finalImageID,
    finalImageURL,
    finalImageCaption,
    finalImageWidth,
    finalImageFloat,
    videoURL,
    videoEmbedCode,
    videoDuration,
    firstLevelTag,
    secondLevelTag,
    thirdLevelTag,
  } = attributes

  const { currentStep, videoURLInput } = states

  const checkVideoURLInput = () => {
    if (/^http(s)?:\/\//g.test(videoURLInput)) {
      const youtubeMatch =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/g.exec(
          videoURLInput,
        )
      const vimeoMatch =
        /^(?:https?\:\/\/)?(?:www\.|player\.)?(?:vimeo\.com\/)([0-9]+)/g.exec(
          videoURLInput,
        )
      const dailyMotionMatch =
        /^(?:https?\:\/\/)?(?:www\.)?(?:dailymotion\.com\/video|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/g.exec(
          videoURLInput,
        )
      const videoPressMatch =
        /^https?:\/\/(?:www\.)?videopress\.com\/(?:embed|v)\/([a-zA-Z0-9]{8,})/g.exec(
          videoURLInput,
        )
      if (youtubeMatch) {
        fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${youtubeMatch[1]}&part=snippet,contentDetails,player&key=AIzaSyDgItjYofyXkIZ4OxF6gN92PIQkuvU319c`,
        )
          .then((response) => {
            response.json().then((data) => {
              if (data.items.length) {
                const timePeriods = data.items[0].contentDetails.duration.match(
                  /(\d{1,2}(?:W|D|H|M|S))/g,
                )
                setAttributes({
                  videoURL: `https://www.youtube.com/watch?v=${youtubeMatch[1]}`,
                  videoName: data.items[0].snippet.title,
                  videoDescription: data.items[0].snippet.description,
                  videoUploadDate:
                    Date.parse(data.items[0].snippet.publishedAt) / 1000,
                  videoThumbnailURL: `https://i.ytimg.com/vi/${youtubeMatch[1]}/default.jpg`,
                  videoEmbedCode: decodeURIComponent(
                    data.items[0].player.embedHtml,
                  ),
                  videoDuration: timePeriods.reduce((sum, part) => {
                    const multiplier = {
                      W: 604800,
                      D: 86400,
                      H: 3600,
                      M: 60,
                      S: 1,
                    }
                    return (
                      sum +
                      Number(part.slice(0, -1)) * multiplier[part.slice(-1)]
                    )
                  }, 0),
                })
              } else {
                resetVideoAttributes()
                setAttributes({
                  videoEmbedCode: `<p className="text-xs">${__(
                    'No video found at URL',
                  )}</p>`,
                })
              }
            })
          })
          .catch((err) => {
            console.log('youtube fetch error')
            console.log(err)
          })
      } else if (vimeoMatch) {
        fetch(`https://vimeo.com/api/v2/video/${vimeoMatch[1]}.json`)
          .then((response) => {
            if (response.ok) {
              response
                .json()
                .then((data) => {
                  setAttributes({
                    videoURL: data[0].url,
                    videoName: data[0].title,
                    videoDescription: data[0].description,
                    videoUploadDate: Date.parse(data[0].upload_date) / 1000,
                    videoThumbnailURL: data[0].thumbnail_large,
                    videoDuration: data[0].duration,
                  })
                  fetch(
                    `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
                      data[0].url,
                    )}`,
                  )
                    .then((response) => {
                      response.json().then((data) => {
                        setAttributes({
                          videoEmbedCode: data.html,
                        })
                      })
                    })
                    .catch((err) => {
                      console.log('vimeo oembed error')
                      console.log(err)
                    })
                })
                .catch((err) => {
                  console.log(err)
                })
            } else {
              resetVideoAttributes()
              setAttributes({
                videoEmbedCode: `<p>${__('No video found at URL')}</p>`,
              })
            }
          })
          .catch((err) => {
            console.log('vimeo fetch error')
            console.log(err)
          })
      } else if (dailyMotionMatch) {
        fetch(
          `https://api.dailymotion.com/video/${dailyMotionMatch[1]}?fields=created_time%2Cthumbnail_1080_url%2Ctitle%2Cdescription%2Curl%2Cembed_html%2Cduration`,
        )
          .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setAttributes({
                  videoURL: data.url,
                  videoName: data.title,
                  videoDescription: data.description,
                  videoUploadDate: data.created_time,
                  videoThumbnailURL: data.thumbnail_1080_url,
                  videoEmbedCode: decodeURIComponent(data.embed_html),
                  videoDuration: data.duration,
                })
              })
            } else {
              resetVideoAttributes()
              setAttributes({
                videoEmbedCode: `<p>${__('No video found at URL')}</p>`,
              })
            }
          })
          .catch((err) => {
            console.log('dailymotion input error')
            console.log(err)
          })
      } else if (videoPressMatch) {
        fetch(
          `https://public-api.wordpress.com/rest/v1.1/videos/${videoPressMatch[1]}`,
        )
          .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setAttributes({
                  videoURL: `https://videopress.com/v/${data.guid}`,
                  videoName: data.title,
                  videoDescription: data.description,
                  videoUploadDate: Date.parse(data.upload_date) / 1000,
                  videoThumbnailURL: data.poster,
                  videoEmbedCode: `<iframe width="560" height="315" src="https://videopress.com/embed/${data.guid}" frameborder="0" allowfullscreen></iframe>
                  <script src="https://videopress.com/videopress-iframe.js"></script>`,
                  videoDuration: Math.floor(data.duration / 1000),
                })
              })
            } else {
              resetVideoAttributes()
              setAttributes({
                videoEmbedCode: `<p>${__('No video found at URL')}</p>`,
              })
            }
          })
          .catch((err) => {
            console.log('videopress input error')
            console.log(err)
          })
      } else {
        resetVideoAttributes()
        setAttributes({ videoEmbedCode: '<p>Video site not supported</p>' })
      }
    } else {
      resetVideoAttributes()
      console.log('input is not a url')
    }
  }

  useEffect(() => {
    const need_block = {
      status: false,
      msg: '',
    }

    if (title === '') {
      need_block.status = true
      need_block.msg = __('Please fill How To title')
    }

    section.forEach((section_) => {
      if (section_.steps.length === 0) {
        need_block.status = true
        need_block.msg = __('Please add step before update')
      }

      if (section_.steps.map((step) => step.title).includes('')) {
        need_block.status = true
        need_block.msg = __('Please fill step title')
      }
    })

    if (!need_block.status) {
      wp.data.dispatch('core/editor').unlockPostSaving('requiredValueLock')
    } else {
      wp.data.dispatch('core/editor').lockPostSaving('requiredValueLock')
    }
  }, [attributes])

  useEffect(() => {
    if (
      blockID === '' ||
      getClientIdsWithDescendants().some(
        (ID) =>
          'blockID' in getBlock(ID).attributes &&
          getBlock(ID).attributes.blockID === blockID,
      )
    ) {
      setAttributes({ blockID: block.clientId })
    }

    const sectionClone = JSON.parse(JSON.stringify(section))
    let hasMissingProperties = false

    sectionClone.forEach((s, si) => {
      s.steps.forEach((st, sti) => {
        if (!st.stepPic.hasOwnProperty('width')) {
          hasMissingProperties = true
          sectionClone[si].steps[sti].stepPic.width = 200
          sectionClone[si].steps[sti].stepPic.float = 'none'
          //   st.stepPic.width = 200;
          //   st.stepPic.float = 'none';
        }
      })
    })

    if (hasMissingProperties) {
      setAttributes({ section: sectionClone })
    }

    if (section.length === 1 && section[0].steps.length === 0) {
      setAttributes({
        section: [
          {
            sectionName: '',
            steps: [
              {
                anchor: 'section-0-step-0',
                stepPic: {
                  img: -1,
                  alt: '',
                  url: '',
                  width: 0,
                  float: 'none',
                },
                direction: '',
                tip: '',
                title: '',
                hasVideoClip: false,
                videoClipStart: 0,
                videoClipEnd: 0,
              },
            ],
          },
        ],
      })
    }
    // setAttributes(setMissingAttr(attributes));
    // isNeedLocked(section);
  }, [])

  const clips = section
    .reduce((stepList, section) => [...stepList, ...section.steps], [])
    .filter((s) => s.hasVideoClip)
    .map((s) => ({
      anchor: s.anchor,
      clipStart: s.videoClipStart,
      clipEnd: s.videoClipEnd,
    }))

  return (
    <>
      <div className='howto' id={`howto-${blockID}`}>
        <RichText
          tagName={firstLevelTag}
          placeholder={__('How to title')}
          keepPlaceholderOnFocus
          value={title}
          className='howto__title font-semibold'
          onChange={(title) => setAttributes({ title })}
        />
        <RichText
          placeholder={__('How to introduction')}
          keepPlaceholderOnFocus
          className='mb-3'
          value={introduction}
          onChange={(introduction) => setAttributes({ introduction })}
        />

        {advancedMode && (
          <>
            <div className='howto-video-input relative mb-2 w-full'>
              <input
                type='url'
                placeholder={__('Insert video URL')}
                className='w-full border border-slate-200'
                value={videoURLInput}
                onChange={(e) => setStates({ videoURLInput: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    checkVideoURLInput()
                  }
                }}
              />
              <div className='absolute top-0 right-0 flex h-full flex-wrap items-center'>
                <button
                  icon='editor-break'
                  label={__('Apply')}
                  type='submit'
                  className='dashicons dashicons-yes-alt mr-2 h-auto text-2xl'
                  onClick={checkVideoURLInput}
                />
                <button
                  type='button'
                  icon='trash'
                  label={__('Delete')}
                  className='dashicons dashicons-dismiss mr-3 h-auto text-2xl'
                  onClick={() => {
                    resetVideoAttributes()
                    setStates({ videoURLInput: '' })
                  }}
                />
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: videoEmbedCode || '<p>Input error</p>',
              }}
              className='text-xs'
            />
            {includeSuppliesList && (
              <>
                <RichText
                  tagName={secondLevelTag}
                  placeholder={__('Required supplies')}
                  keepPlaceholderOnFocus
                  value={suppliesIntro}
                  onChange={(suppliesIntro) => setAttributes({ suppliesIntro })}
                />
                <ListWrapper
                  className='howto-supplies-list'
                  listStyle={suppliesListStyle}
                >
                  {supplies.map((supply, i) => (
                    <li className='relative mb-8'>
                      <div className='howto-step__control-button absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 gap-2 rounded-lg bg-gray-400 px-2 py-1'>
                        <button
                          type='button'
                          className='howto-arrow'
                          icon='arrow-up-alt'
                          onClick={() => {
                            if (i > 0) {
                              const newSupplies = moveElement(
                                supplies,
                                i,
                                i - 1,
                              )
                              setAttributes({
                                supplies: newSupplies,
                              })
                            }
                          }}
                          label={__('Move step up')}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                          className='howto-arrow'
                          icon='arrow-down-alt'
                          onClick={() => {
                            if (i < supplies.length - 1) {
                              const newSupplies = moveElement(
                                supplies,
                                i,
                                i + 1,
                              )
                              setAttributes({
                                supplies: newSupplies,
                              })
                            }
                          }}
                          label={__('Move step down')}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                          className='howto-delete'
                          icon='trash'
                          label={__('Delete step')}
                          onClick={() => {
                            setAttributes({
                              supplies: [
                                ...supplies.slice(0, i),
                                ...supplies.slice(i + 1),
                              ],
                            })
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                      <div>
                        <RichText
                          className='mb-3'
                          keepPlaceholderOnFocus
                          value={supply.name}
                          placeholder={__('Enter supply name')}
                          onChange={(newName) =>
                            setAttributes({
                              supplies: [
                                ...supplies.slice(0, i),
                                Object.assign(supplies[i], { name: newName }),
                                ...supplies.slice(i + 1),
                              ],
                            })
                          }
                        />
                      </div>
                      {addSupplyImages &&
                        (supply.imageURL !== '' ? (
                          <figure className='relative mx-auto w-fit'>
                            <img
                              className='howto-supply-image'
                              src={supply.imageURL}
                              alt=''
                            />
                            {isSelected && (
                              <ButtonDeleteImage
                                onClick={() => {
                                  setAttributes({
                                    supplies: [
                                      ...supplies.slice(0, i),
                                      Object.assign(supply, {
                                        imageID: 0,
                                        imageURL: '',
                                        imageAlt: '',
                                      }),
                                      ...supplies.slice(i + 1),
                                    ],
                                  })
                                }}
                              />
                            )}
                          </figure>
                        ) : (
                          <MediaUpload
                            onSelect={(img) =>
                              setAttributes({
                                supplies: [
                                  ...supplies.slice(0, i),
                                  Object.assign(supply, {
                                    imageID: img.id,
                                    imageURL: img.url,
                                    imageAlt: img.alt,
                                  }),
                                  ...supplies.slice(i + 1),
                                ],
                              })
                            }
                            allowedTypes={['image']}
                            value={supply.imageID}
                            render={({ open }) => <InputUpload open={open} />}
                          />
                        ))}
                    </li>
                  ))}
                </ListWrapper>
                <ButtonAddStep
                  label='Tambah supplies'
                  onClick={() => {
                    setAttributes({
                      supplies: [
                        ...supplies,
                        {
                          name: '',
                          imageID: 0,
                          imageAlt: '',
                          imageURL: '',
                        },
                      ],
                    })
                  }}
                />
              </>
            )}
            {includeToolsList && (
              <>
                <RichText
                  tagName={secondLevelTag}
                  placeholder={__('Required tools')}
                  keepPlaceholderOnFocus
                  value={toolsIntro}
                  onChange={(toolsIntro) => setAttributes({ toolsIntro })}
                />
                <ListWrapper
                  className='howto-tools-list'
                  listStyle={toolsListStyle}
                >
                  {tools.map((tool, i) => (
                    <li className='relative mb-8'>
                      <div className='howto-step__control-button absolute top-0 right-[10px] grid translate-y-[-50%] grid-cols-3 gap-2 rounded-lg bg-gray-400 px-2 py-1'>
                        <button
                          type='button'
                          className='howto-arrow'
                          icon='arrow-up-alt'
                          onClick={() => {
                            if (i > 0) {
                              const newSupplies = moveElement(tools, i, i - 1)
                              setAttributes({
                                tools: newSupplies,
                              })
                            }
                          }}
                          label={__('Move step up')}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                          className='howto-arrow'
                          icon='arrow-down-alt'
                          onClick={() => {
                            if (i < tools.length - 1) {
                              const newSupplies = moveElement(tools, i, i + 1)
                              setAttributes({
                                tools: newSupplies,
                              })
                            }
                          }}
                          label={__('Move step down')}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                          className='howto-delete'
                          icon='trash'
                          label={__('Delete step')}
                          onClick={() => {
                            setAttributes({
                              tools: [
                                ...tools.slice(0, i),
                                ...tools.slice(i + 1),
                              ],
                            })
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
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
                      <div>
                        <RichText
                          className='mb-3'
                          keepPlaceholderOnFocus
                          value={tool.name}
                          placeholder={__('Enter tool name')}
                          onChange={(newTool) =>
                            setAttributes({
                              tools: [
                                ...tools.slice(0, i),
                                Object.assign(tools[i], { name: newTool }),
                                ...tools.slice(i + 1),
                              ],
                            })
                          }
                        />
                      </div>
                      {addToolImages &&
                        (tool.imageURL !== '' ? (
                          <figure className='relative mx-auto w-fit'>
                            <img src={tool.imageURL} alt='' />
                            {isSelected && (
                              <ButtonDeleteImage
                                onClick={() => {
                                  setAttributes({
                                    tools: [
                                      ...tools.slice(0, i),
                                      Object.assign(tool, {
                                        imageID: 0,
                                        imageURL: '',
                                        imageAlt: '',
                                      }),
                                      ...tools.slice(i + 1),
                                    ],
                                  })
                                }}
                              />
                            )}
                          </figure>
                        ) : (
                          <MediaUpload
                            onSelect={(img) =>
                              setAttributes({
                                tools: [
                                  ...tools.slice(0, i),
                                  Object.assign(tool, {
                                    imageID: img.id,
                                    imageURL: img.url,
                                    imageAlt: img.alt,
                                  }),
                                  ...tools.slice(i + 1),
                                ],
                              })
                            }
                            allowedTypes={['image']}
                            value={tool.imageID}
                            render={({ open }) => <InputUpload open={open} />}
                          />
                        ))}
                    </li>
                  ))}
                </ListWrapper>
                <ButtonAddStep
                  label='Tambah tools'
                  onClick={() => {
                    setAttributes({
                      tools: [
                        ...tools,
                        {
                          name: '',
                          imageID: 0,
                          imageAlt: '',
                          imageURL: '',
                        },
                      ],
                    })
                  }}
                />
              </>
            )}

            <div className='howto_cost_container mb-3 mt-0 flex flex-wrap justify-between'>
              <RichText
                value={costDisplayText}
                className='font-medium'
                onChange={(costDisplayText) =>
                  setAttributes({ costDisplayText })
                }
              />
              <div
                className='howto_cost_display flex'
                style={{
                  flexDirection: showUnitFirst ? 'row' : 'row-reverse',
                }}
              >
                <RichText
                  style={
                    showUnitFirst
                      ? { paddingRight: '10px' }
                      : { paddingLeft: '10px' }
                  }
                  keepPlaceholderOnFocus
                  placeholder={__('Units')}
                  value={costCurrency}
                  onChange={(costCurrency) => {
                    setAttributes({
                      costCurrency: costCurrency.replace(/<br>/g, ''),
                    })
                  }}
                />
                <RichText
                  keepPlaceholderOnFocus
                  placeholder={__('0')}
                  value={String(cost)}
                  onChange={(cost) => {
                    if (!Number.isNaN(Number(cost))) {
                      setAttributes({ cost: Number(cost) })
                    }
                  }}
                />
              </div>
            </div>
          </>
        )}
        <RichText
          tagName={secondLevelTag}
          className='mt-0 mb-1'
          placeholder={__('Duration')}
          keepPlaceholderOnFocus
          value={timeIntro}
          onChange={(timeIntro) => setAttributes({ timeIntro })}
        />
        <div className='howto-duration-input'>
          <p className='m-0'>
            <RichText
              keepPlaceholderOnFocus
              value={totalTimeText}
              onChange={(totalTimeText) => setAttributes({ totalTimeText })}
            />
          </p>
          <div className='grid grid-cols-4 gap-4 md:grid-cols-7'>
            {units.map((u, i) => (
              <div key={i}>
                {u === 'Tahun' ||
                u === 'Bulan' ||
                u === 'Minggu' ||
                u === 'Hari' ? (
                  <p className='hidden'>
                    {__(u)}
                    <RichText
                      className='hidden'
                      keepPlaceholderOnFocus
                      placeholder={__('0')}
                      value={String(totalTime[i])}
                      onChange={(newInput) => {
                        if (!Number.isNaN(Number(newInput))) {
                          setAttributes({
                            totalTime: [
                              ...totalTime.slice(0, i),
                              Number(newInput),
                              ...totalTime.slice(i + 1),
                            ],
                          })
                        }
                      }}
                    />
                  </p>
                ) : (
                  <p className='m-0'>
                    {__(u)} :{' '}
                    <RichText
                      className='howto-time-value inline-block'
                      keepPlaceholderOnFocus
                      placeholder={__('0')}
                      value={String(totalTime[i])}
                      onChange={(newInput) => {
                        if (!Number.isNaN(Number(newInput))) {
                          setAttributes({
                            totalTime: [
                              ...totalTime.slice(0, i),
                              Number(newInput),
                              ...totalTime.slice(i + 1),
                            ],
                          })
                        }
                      }}
                    />
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        {useSections ? (
          <ListWrapper listStyle={sectionListStyle}>
            {section.map((s, i) => (
              <HowToSection
                {...s}
                advancedMode={advancedMode}
                clips={clips}
                videoURL={videoURL}
                videoDuration={videoDuration}
                sectionListStyle={sectionListStyle}
                sectionNum={i}
                sectionTag={secondLevelTag}
                stepTag={thirdLevelTag}
                selectStepInSection={(step) =>
                  setStates({ currentStep: `section-${i}-step-${step}` })
                }
                editSection={(newSection) =>
                  setAttributes({
                    section: [
                      ...section.slice(0, i),
                      newSection,
                      ...section.slice(i + 1),
                    ],
                  })
                }
                moveUp={() => {
                  if (i > 0) {
                    const newSection = moveElement(section, i, i - 1)
                    setAttributes({
                      section: newSection,
                    })
                  }
                }}
                moveDown={() => {
                  if (i < section.length - 1) {
                    const newSection = moveElement(section, i, i + 1)
                    setAttributes({
                      section: newSection,
                    })
                  }
                }}
                deleteSection={() =>
                  setAttributes({
                    section: [...section.slice(0, i), ...section.slice(i + 1)],
                  })
                }
                blockIsSelected={isSelected}
                currentStep={currentStep}
                updateState={(newState) => setStates(newState)}
              />
            ))}
          </ListWrapper>
        ) : (
          <>
            <ListWrapper
              className='howto-steps-list pl-0'
              listStyle={sectionListStyle}
            >
              {section[0].steps.map((step, i) => (
                <HowToStep
                  advancedMode={advancedMode}
                  sectionNum={-1}
                  stepNum={i}
                  stepTag={thirdLevelTag}
                  {...step}
                  clips={clips}
                  videoURL={videoURL}
                  videoDuration={videoDuration}
                  selectStep={() => setStates({ currentStep: `step-${i}` })}
                  editStep={(newStep) => {
                    setAttributes({
                      section: [
                        Object.assign(section[0], {
                          steps: [
                            ...section[0].steps.slice(0, i),
                            Object.assign(section[0].steps[i], newStep),
                            ...section[0].steps.slice(i + 1),
                          ],
                        }),
                      ],
                    })
                  }}
                  deleteStep={() => {
                    const newSection = [
                      Object.assign(section[0], {
                        steps: [
                          ...section[0].steps.slice(0, i),
                          ...section[0].steps.slice(i + 1),
                        ],
                      }),
                    ]

                    section[0].steps.forEach((step, j) => {
                      //   step.anchor = `step${j}`
                      newSection[0].steps[j].anchor = `step${j}`
                    })
                    setAttributes({
                      section: newSection,
                    })
                    if (currentStep === `step-${i}`) {
                      setStates({ currentStep: '' })
                    }
                  }}
                  moveUp={() => {
                    if (i > 0) {
                      const newSection = [
                        Object.assign(section[0], {
                          steps: [
                            ...section[0].steps.slice(0, i - 1),
                            section[0].steps[i],
                            section[0].steps[i - 1],
                            ...section[0].steps.slice(i + 1),
                          ],
                        }),
                      ]
                      section[0].steps.forEach((step, j) => {
                        // step.anchor = `step${j}`
                        newSection[0].steps[j].anchor = `step${j}`
                      })
                      setAttributes({ section: newSection })
                      setStates({ currentStep: `step-${i - 1}` })
                    }
                  }}
                  moveDown={() => {
                    if (i < section[0].steps.length - 1) {
                      const newSection = [
                        Object.assign(section[0], {
                          steps: [
                            ...section[0].steps.slice(0, i),
                            section[0].steps[i + 1],
                            section[0].steps[i],
                            ...section[0].steps.slice(i + 2),
                          ],
                        }),
                      ]
                      section[0].steps.forEach((step, j) => {
                        // step.anchor = `step${j}`
                        newSection[0].steps[j].anchor = `step${j}`
                      })

                      setAttributes({ section: newSection })
                      setStates({ currentStep: `step-${i + 1}` })
                    }
                  }}
                  blockIsSelected={isSelected}
                  updateState={(newState) => setStates(newState)}
                />
              ))}
            </ListWrapper>

            <ButtonAddStep
              onClick={() => {
                setAttributes({
                  section: [
                    Object.assign(section[0], {
                      steps: [
                        ...section[0].steps,
                        {
                          anchor: `step${section[0].steps.length}`,
                          stepPic: {
                            img: -1,
                            alt: '',
                            url: '',
                            width: 0,
                            float: 'none',
                          },
                          direction: '',
                          tip: '',
                          title: '',
                          hasVideoClip: false,
                          videoClipStart: 0,
                          videoClipEnd: 0,
                        },
                      ],
                    }),
                  ],
                })
              }}
            />
          </>
        )}
        {useSections && (
          <ButtonAddStep
            label='Tambah section'
            onClick={() => {
              setAttributes({
                section: [
                  ...section,
                  {
                    sectionName: '',
                    steps: [
                      {
                        anchor: `section${section.length}step0`,
                        stepPic: {
                          img: -1,
                          alt: '',
                          url: '',
                          width: 0,
                          float: 'none',
                        },
                        direction: '',
                        tip: '',
                        title: '',
                        hasVideoClip: false,
                        videoClipStart: 0,
                        videoClipEnd: 0,
                      },
                    ],
                  },
                ],
              })
            }}
          />
        )}

        <div className='howto-yield mb-4 rounded-xl bg-[#16A085] p-5 text-white'>
          <div className='w-100 mb-3 flex flex-wrap justify-center'>
            <RichText
              tagName={secondLevelTag}
              className='m-0 font-bold text-white'
              placeholder={__('Result')}
              keepPlaceholderOnFocus
              value={resultIntro}
              onChange={(resultIntro) => setAttributes({ resultIntro })}
              onFocus={() => setStates({ currentStep: 'final' })}
            />
          </div>

          {finalImageURL !== '' ? (
            <figure className='howto-yield-image-container relative mx-auto w-fit'>
              <img
                alt=''
                className='howto-step-image overflow-hidden rounded-xl'
                src={finalImageURL}
                onClick={() => setStates({ currentStep: 'final' })}
                aria-hidden='true'
              />
              {isSelected && (
                <ButtonDeleteImage
                  onClick={() => {
                    setAttributes({
                      finalImageID: -1,
                      finalImageAlt: '',
                      finalImageURL: '',
                      finalImageCaption: '',
                      finalImageWidth: 0,
                      finalImageFloat: 'none',
                    })
                  }}
                />
              )}
              <RichText
                tagName='figcaption'
                keepPlaceholderOnFocus
                placeholder={__('Final image caption')}
                value={finalImageCaption}
                onChange={(finalImageCaption) =>
                  setAttributes({ finalImageCaption })
                }
                onFocus={() => setStates({ currentStep: 'final' })}
              />
            </figure>
          ) : (
            <div className='align-center flex flex-wrap justify-center py-5'>
              <MediaUpload
                onSelect={(img) => {
                  setStates({ currentStep: 'final' })
                  setAttributes({
                    finalImageID: img.id,
                    finalImageAlt: img.alt,
                    finalImageURL: img.url,
                    finalImageCaption: img.caption,
                    finalImageWidth: Math.min(Math.max(img.width, 200), 800),
                    finalImageFloat: 'none',
                  })
                }}
                allowedTypes={['image']}
                value={finalImageID}
                render={({ open }) => <InputUpload open={open} />}
              />
            </div>
          )}
          <RichText
            keepPlaceholderOnFocus
            placeholder={__('Result text')}
            value={howToYield}
            onChange={(howToYield) => setAttributes({ howToYield })}
            onFocus={() => setStates({ currentStep: 'final' })}
          />
        </div>

        <div className='mb-4 grid  grid-cols-1 gap-4 md:grid-cols-3 md:gap-3'>
          <div className='rounded-lg border border-slate-200 px-4 py-2'>
            <h6 className='m-0 font-normal normal-case'>Like Count</h6>
            <TextControl
              value={howToLikeCount}
              onChange={(howToLikeCount) => setAttributes({ howToLikeCount })}
              type='number'
            />
          </div>
          <div className='rounded-lg border border-slate-200 px-4 py-2'>
            <h6 className='m-0 font-normal normal-case'>Disike Count</h6>
            <TextControl
              value={howToDisikeCount}
              onChange={(howToDisikeCount) =>
                setAttributes({ howToDisikeCount })
              }
              type='number'
            />
          </div>
          <div className='rounded-lg border border-slate-200 px-4 py-2'>
            <h6 className='m-0 font-normal normal-case'>Vote Total Count</h6>
            <p className='m-0'>{howToVoteCount}</p>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `@media (min-width:768px) {${
            useSections
              ? section
                  .map((s, i) =>
                    s.steps
                      .map((st) =>
                        (({ width, float }) => ({ width, float }))(st.stepPic),
                      )
                      .map((img, j) =>
                        img.width > 0
                          ? `#howto-${blockID} .howto-section:nth-child(${
                              i + 1
                            }) .howto-step:nth-child(${
                              j + 1
                            }) figure { width: ${img.width}px; float: ${
                              img.float
                            };}`
                          : '',
                      )
                      .join(''),
                  )
                  .join('')
              : section[0].steps
                  .map((s) =>
                    (({ width, float }) => ({ width, float }))(s.stepPic),
                  )
                  .map((img, i) =>
                    img.width > 0
                      ? `#howto-${blockID} .howto-step:nth-child(${
                          i + 1
                        }) figure { width: ${img.width}px; float: ${
                          img.float
                        };}`
                      : '',
                  )
                  .join('')
          }${
            finalImageWidth > 0
              ? `#howto-${blockID} .howto-yield-image-container{width: ${finalImageWidth}px;float: ${finalImageFloat};}`
              : ''
          }
}`,
        }}
      />
    </>
  )
}
