/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react'
import { ButtonAddStep } from '../../../../components/button_add_step'
import { ButtonUpDownDelete } from '../../../../components/button_up_down_delete'

import { ListWrapper, HowToStep } from './index'

const { __ } = wp.i18n // Import __() from wp.i18n

const { RichText } = wp.blockEditor || wp.editor

export class HowToSection extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  render() {
    const {
      sectionListStyle,
      sectionNum,
      sectionName,
      sectionTag,
      steps,
      stepTag,
      editSection,
      moveUp,
      moveDown,
      deleteSection,
      videoDuration,
      clips,
      videoURL,
      advancedMode,
      blockIsSelected,
      updateState,
      currentStep,
    } = this.props

    return (
      <li className='howto-section'>
        <div className='relative'>
          <RichText
            keepPlaceholderOnFocus
            tagName={sectionTag}
            placeholder={__('Section name goes here')}
            value={sectionName}
            onChange={(sectionName) => editSection({ sectionName, steps })}
          />

          <ButtonUpDownDelete
            deleteStep={deleteSection}
            moveUp={moveUp}
            moveDown={moveDown}
          />
        </div>
        <ListWrapper
          className='howto-steps-list pl-0'
          listStyle={sectionListStyle}
        >
          {steps.map((step, i) => (
            <HowToStep
              {...step}
              advancedMode={advancedMode}
              clips={clips}
              sectionNum={sectionNum}
              stepNum={i}
              stepTag={stepTag}
              videoURL={videoURL}
              videoDuration={videoDuration}
              selectStep={() => this.props.selectStepInSection(i)}
              editStep={(newStep) => {
                editSection({
                  sectionName,
                  steps: [
                    ...steps.slice(0, i),
                    Object.assign(steps[i], newStep),
                    ...steps.slice(i + 1),
                  ],
                })
              }}
              deleteStep={() => {
                const newSteps = [...steps.slice(0, i), ...steps.slice(i + 1)]
                newSteps.forEach((step, j) => {
                  // step.anchor = `section${sectionNum}step${j}`
                  newSteps[j].anchor = `section${sectionNum}step${j}`
                })
                editSection({
                  sectionName,
                  steps: [...steps.slice(0, i), ...steps.slice(i + 1)],
                })
                if (currentStep === `section-${sectionNum}-step-${i}`) {
                  updateState({ currentStep: '' })
                }
              }}
              moveUp={() => {
                if (i > 0) {
                  const newSteps = [
                    ...steps.slice(0, i - 1),
                    steps[i],
                    steps[i - 1],
                    ...steps.slice(i + 1),
                  ]
                  newSteps.forEach((step, j) => {
                    //   step.anchor = `section${sectionNum}step${j}`
                    newSteps[j].anchor = `section${sectionNum}step${j}`
                  })
                  editSection({ sectionName, steps: newSteps })
                  // set value of currentStep to recently-moved step
                  updateState({
                    currentStep: `section-${sectionNum}-step-${i - 1}`,
                  })
                }
              }}
              moveDown={() => {
                if (i < steps.length - 1) {
                  const newSteps = [
                    ...steps.slice(0, i),
                    steps[i + 1],
                    steps[i],
                    ...steps.slice(i + 2),
                  ]
                  newSteps.forEach((step, j) => {
                    //   step.anchor = `section${sectionNum}step${j}`
                    newSteps[j].anchor = `section${sectionNum}step${j}`
                  })
                  editSection({ sectionName, steps: newSteps })
                  updateState({
                    currentStep: `section-${sectionNum}-step-${i + 1}`,
                  })
                }
              }}
              blockIsSelected={blockIsSelected}
              currentStep={currentStep}
              updateState={updateState}
            />
          ))}
        </ListWrapper>

        <ButtonAddStep
          onClick={() => {
            editSection({
              sectionName,
              steps: [
                ...steps,
                {
                  anchor: `section${sectionNum}step${steps.length}`,
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
            })
          }}
        />
      </li>
    )
  }
}
