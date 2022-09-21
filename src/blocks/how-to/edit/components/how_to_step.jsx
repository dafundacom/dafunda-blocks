/* eslint-disable react/destructuring-assignment */
import { Component } from 'react'
import { ButtonDeleteImage } from '../../../../components/button_delete_image'
import { ButtonUpDownDelete } from '../../../../components/button_up_down_delete'

const { __ } = wp.i18n

const { RichText, MediaUpload } = wp.blockEditor || wp.editor

const { ToggleControl } = wp.components

const defaultTimeDisplay = {
  w: 0,
  d: 0,
  h: 0,
  m: 0,
  s: 0,
}

export class HowToStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: { ...defaultTimeDisplay },
      endTime: { ...defaultTimeDisplay },
      validTimeInput: true,
    }
  }

  componentDidMount() {
    const {
      clips,
      hasVideoClip,
      videoClipEnd,
      videoClipStart,
      sectionNum,
      stepNum,
    } = this.props

    if (hasVideoClip) {
      const start = convertFromSeconds(videoClipStart)
      const end = convertFromSeconds(videoClipEnd)
      const clipId =
        sectionNum > -1
          ? `section${sectionNum}step${stepNum}`
          : `step${stepNum}`
      this.setState({
        startTime: {
          w: 0,
          d: start.d,
          h: start.h,
          m: start.m,
          s: start.s,
        },
        endTime: {
          w: 0,
          d: end.d,
          h: end.h,
          m: end.m,
          s: end.s,
        },
        validTimeInput:
          clips.filter(
            (c) =>
              c.anchor !== clipId &&
              ((videoClipStart > c.clipStart && videoClipStart < c.clipEnd) ||
                (videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd)),
          ).length === 0,
      })
    }
  }

  componentDidUpdate(prevProps) {
    const {
      videoClipStart,
      videoClipEnd,
      sectionNum,
      stepNum,
      clips,
      videoURL,
    } = this.props

    const clipId =
      sectionNum > -1 ? `section${sectionNum}step${stepNum}` : `step${stepNum}`

    if (
      prevProps.videoClipStart !== videoClipStart ||
      prevProps.videoClipEnd !== videoClipEnd
    ) {
      this.setState({
        validTimeInput:
          videoClipStart <= videoClipEnd &&
          clips.filter(
            (c) =>
              c.anchor !== clipId &&
              ((videoClipStart > c.clipStart && videoClipStart < c.clipEnd) ||
                (videoClipEnd > c.clipStart && videoClipEnd < c.clipEnd)),
          ).length === 0,
      })
    }

    if (prevProps.videoURL !== videoURL) {
      this.setState({
        startTime: { ...defaultTimeDisplay },
        endTime: { ...defaultTimeDisplay },
      })
    }
  }

  render() {
    const {
      direction,
      tip,
      title,
      editStep,
      deleteStep,
      moveUp,
      moveDown,
      stepPic,
      stepTag,
      videoDuration,
      hasVideoClip,
      advancedMode,
      blockIsSelected,
      selectStep,
      stepNum,
    } = this.props

    const { startTime, endTime, validTimeInput } = this.state

    return (
      <li className='howto-step relative mt-12 overflow-visible p-3'>
        <ButtonUpDownDelete
          deleteStep={deleteStep}
          moveUp={moveUp}
          moveDown={moveDown}
        />

        <div className='flex flex-wrap'>
          <div className='flex w-full flex-wrap'>
            <div className='my-2 flex aspect-square h-[fit-content] w-[2.2rem] flex-none flex-wrap  items-center justify-center rounded-full bg-slate-200 text-2xl font-semibold md:col-span-1 md:w-[2.2rem] md:text-2xl'>
              {stepNum + 1}
            </div>

            <div className='flex-1 px-2'>
              <RichText
                tagName={stepTag}
                keepPlaceholderOnFocus
                placeholder={__('Title goes here')}
                className='howto-step__title my-2 text-[1.3rem] font-normal normal-case md:text-2xl'
                value={title}
                onChange={(newVal) => editStep({ title: newVal })}
                onFocus={selectStep}
              />
            </div>
          </div>

          <div className='w-full'>
            <RichText
              keepPlaceholderOnFocus
              placeholder={__('Direction goes here')}
              value={direction}
              onFocus={selectStep}
              onChange={(newVal) => editStep({ direction: newVal })}
            />
            <RichText
              keepPlaceholderOnFocus
              className='hidden'
              placeholder={__('Add a tip (optional)')}
              value={tip}
              onFocus={selectStep}
              onChange={(newVal) => editStep({ tip: newVal })}
            />
            {advancedMode && (
              <>
                {videoDuration > 0 && (
                  <ToggleControl
                    checked={hasVideoClip}
                    label={__('Use part of the video in this step')}
                    onChange={(hasVideoClip) => {
                      editStep({ hasVideoClip })
                      if (!hasVideoClip) {
                        editStep({ videoClipEnd: 0, videoClipStart: 0 })
                        this.setState({
                          startTime: { ...defaultTimeDisplay },
                          endTime: { ...defaultTimeDisplay },
                        })
                      }
                    }}
                  />
                )}
                {videoDuration > 0 && hasVideoClip && (
                  <>
                    <span style={{ color: validTimeInput ? 'black' : 'red' }}>
                      {__('Start time')}
                    </span>
                    {videoDuration >= 86400 && (
                      <input
                        type='number'
                        value={startTime.d}
                        min={0}
                        step={1}
                        title={__('Days')}
                        onChange={(e) => {
                          const { h, m, s } = this.state.startTime
                          const d = Number(e.target.value)
                          const startPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            startPoint < videoDuration &&
                            d % 1 === 0 &&
                            d > -1
                          ) {
                            this.setState({
                              startTime: Object.assign(startTime, { d }),
                            })
                            editStep({ videoClipStart: startPoint })
                          }
                        }}
                      />
                    )}
                    {videoDuration >= 3600 && (
                      <input
                        type='number'
                        value={startTime.h}
                        min={0}
                        max={23}
                        step={1}
                        title={__('Hours')}
                        onChange={(e) => {
                          const { d, m, s } = this.state.startTime
                          const h = Number(e.target.value)
                          const startPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            startPoint < videoDuration &&
                            h % 1 === 0 &&
                            h > -1 &&
                            h < 24
                          ) {
                            this.setState({
                              startTime: Object.assign(startTime, { h }),
                            })
                            editStep({ videoClipStart: startPoint })
                          }
                        }}
                      />
                    )}
                    {videoDuration >= 60 && (
                      <input
                        type='number'
                        value={startTime.m}
                        min={0}
                        max={59}
                        step={1}
                        title={__('Minutes')}
                        onChange={(e) => {
                          const { d, h, s } = this.state.startTime
                          const m = Number(e.target.value)
                          const startPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            startPoint < videoDuration &&
                            m % 1 === 0 &&
                            m > -1 &&
                            m < 60
                          ) {
                            this.setState({
                              startTime: Object.assign(startTime, { m }),
                            })
                            editStep({ videoClipStart: startPoint })
                          }
                        }}
                      />
                    )}
                    <input
                      type='number'
                      value={startTime.s}
                      min={0}
                      max={59}
                      step={1}
                      title={__('Seconds')}
                      onChange={(e) => {
                        const { d, h, m } = this.state.startTime
                        const s = Number(e.target.value)
                        const startPoint = d * 86400 + h * 3600 + m * 60 + s

                        if (
                          startPoint < videoDuration &&
                          s % 1 === 0 &&
                          s > -1 &&
                          s < 60
                        ) {
                          this.setState({
                            startTime: Object.assign(startTime, { s }),
                          })
                          editStep({ videoClipStart: startPoint })
                        }
                      }}
                    />
                    <br />
                    <span style={{ color: validTimeInput ? 'black' : 'red' }}>
                      {__('End time')}
                    </span>
                    {videoDuration >= 86400 && (
                      <input
                        type='number'
                        value={endTime.d}
                        min={0}
                        step={1}
                        title={__('Days')}
                        onChange={(e) => {
                          const { h, m, s } = this.state.endTime
                          const d = Number(e.target.value)
                          const endPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            endPoint <= videoDuration &&
                            d % 1 === 0 &&
                            d > -1
                          ) {
                            this.setState({
                              endTime: Object.assign(endTime, { d }),
                            })
                            editStep({ videoClipEnd: endPoint })
                          }
                        }}
                      />
                    )}
                    {videoDuration >= 3600 && (
                      <input
                        type='number'
                        value={endTime.h}
                        min={0}
                        max={23}
                        step={1}
                        title={__('Hours')}
                        onChange={(e) => {
                          const { d, m, s } = this.state.endTime
                          const h = Number(e.target.value)
                          const endPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            endPoint <= videoDuration &&
                            h % 1 === 0 &&
                            h > -1 &&
                            h < 24
                          ) {
                            this.setState({
                              endTime: Object.assign(endTime, { h }),
                            })
                            editStep({ videoClipEnd: endPoint })
                          }
                        }}
                      />
                    )}
                    {videoDuration >= 60 && (
                      <input
                        type='number'
                        value={endTime.m}
                        min={0}
                        max={59}
                        step={1}
                        title={__('Minutes')}
                        onChange={(e) => {
                          const { d, h, s } = this.state.endTime
                          const m = Number(e.target.value)
                          const endPoint = d * 86400 + h * 3600 + m * 60 + s

                          if (
                            endPoint <= videoDuration &&
                            m % 1 === 0 &&
                            m > -1 &&
                            m < 60
                          ) {
                            this.setState({
                              endTime: Object.assign(endTime, { m }),
                            })
                            editStep({ videoClipEnd: endPoint })
                          }
                        }}
                      />
                    )}
                    <input
                      type='number'
                      value={endTime.s}
                      min={0}
                      max={59}
                      step={1}
                      title={__('Seconds')}
                      onChange={(e) => {
                        const { d, h, m } = this.state.endTime
                        const s = Number(e.target.value)
                        const endPoint = d * 86400 + h * 3600 + m * 60 + s

                        if (
                          endPoint <= videoDuration &&
                          s % 1 === 0 &&
                          s > -1 &&
                          s < 60
                        ) {
                          this.setState({
                            endTime: Object.assign(endTime, { s }),
                          })
                          editStep({ videoClipEnd: endPoint })
                        }
                      }}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div className='howto-step__image mx-auto mt-3 max-h-[1000px] w-full md:max-h-[1600px]'>
            {stepPic.url !== '' ? (
              <figure className='relative mx-auto w-fit'>
                <img
                  className='howto-step-image overflow-hidden rounded-xl'
                  src={stepPic.url}
                  onClick={selectStep}
                  aria-hidden='true'
                  alt=''
                />
                {blockIsSelected && (
                  <ButtonDeleteImage
                    onClick={() => {
                      editStep({
                        stepPic: {
                          id: -1,
                          alt: '',
                          url: '',
                          caption: '',
                          width: 0,
                          float: 'none',
                        },
                      })
                    }}
                  />
                )}
                <center>
                  <em>
                    <RichText
                      tagName='figcaption'
                      keepPlaceholderOnFocus
                      //   className="text-base"
                      placeholder={__('Step image caption')}
                      value={stepPic.caption}
                      onFocus={selectStep}
                      onChange={(newCaption) =>
                        editStep({
                          stepPic: Object.assign(stepPic, {
                            caption: newCaption,
                          }),
                        })
                      }
                    />
                  </em>
                </center>
              </figure>
            ) : (
              <div className='align-center flex flex-wrap justify-center py-5'>
                <MediaUpload
                  onSelect={(img) => {
                    editStep({
                      stepPic: {
                        id: img.id,
                        alt: img.alt,
                        url: img.url,
                        caption: img.caption,
                        width: Math.min(Math.max(img.width, 200), 800),
                        float: 'none',
                      },
                    })
                    selectStep()
                  }}
                  allowedTypes={['image']}
                  value={stepPic.id}
                  render={({ open }) => (
                    <div
                      className='flex aspect-[16/9] w-full flex-wrap items-center justify-center rounded-lg bg-[#EEEEEE] md:aspect-[16/6]'
                      onClick={open}
                      aria-hidden='true'
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
          </div>
        </div>
      </li>
    )
  }
}
