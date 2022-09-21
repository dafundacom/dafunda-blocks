/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react'

const { __ } = wp.i18n // Import __() from wp.i18n

const { InspectorControls } = wp.blockEditor || wp.editor

const { ToggleControl, PanelBody, SelectControl, RadioControl, RangeControl } =
  wp.components

export class InspectorPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      attributes: {
        advancedMode,
        section,
        sectionListStyle,
        suppliesListStyle,
        toolsListStyle,
        showUnitFirst,
        useSections,
        includeToolsList,
        addToolImages,
        includeSuppliesList,
        addSupplyImages,
        finalImageID,
        finalImageWidth,
        finalImageFloat,
        firstLevelTag,
        secondLevelTag,
        thirdLevelTag,
      },
      setAttributes,
      currentStep,
      updateState,
    } = this.props

    let activeImage = { width: 0, float: 'none' }

    let sectionNum = -1
    let stepNum = -1

    const tagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong']

    if (currentStep && currentStep !== '') {
      if (currentStep === 'final') {
        if (finalImageID > -1) {
          activeImage = { width: finalImageWidth, float: finalImageFloat }
        }
      } else {
        const parsed = currentStep.split('-')

        if (useSections) {
          sectionNum = parseInt(parsed[1])
          stepNum = parseInt(parsed[3])

          if (!Number.isNaN(stepNum)) {
            // exclude review image
            const { width, float, id } =
              section[sectionNum].steps[stepNum].stepPic
            if (id > -1) {
              activeImage = { width, float }
            }
          }
        } else {
          stepNum = parseInt(parsed[1])

          if (!Number.isNaN(stepNum)) {
            // exclude review image
            const { width, float, id } = section[0].steps[stepNum].stepPic
            if (id > -1) {
              activeImage = { width, float }
            }
          }
        }
      }
    }

    return (
      <InspectorControls>
        <PanelBody title={__('How To Settings')}>
          <ToggleControl
            label={__('Use sections')}
            checked={useSections}
            onChange={(useSections) => {
              setAttributes({ useSections })
              if (useSections) {
                const newSection = JSON.parse(JSON.stringify(section))
                newSection.forEach((ns, i) =>
                  ns.steps.forEach((s, j) => {
                    s.anchor = `section${i}step${j}`
                  }),
                )
                if (currentStep !== '') {
                  updateState({ currentStep: `section-0-${currentStep}` })
                }
              } else {
                updateState({
                  currentStep: currentStep.slice(currentStep.indexOf('step')),
                })
                if (section.length < 1) {
                  setAttributes({
                    section: [{ sectionName: '', steps: [] }],
                  })
                } else {
                  const newSection = JSON.parse(JSON.stringify(section))
                  newSection[0].steps.forEach((s, i) => {
                    s.anchor = `step${i}`
                  })
                  setAttributes({ section: newSection })
                }
              }
            }}
          />
          <ToggleControl
            label={__('Use additional recommended attributes')}
            checked={advancedMode}
            onChange={(advancedMode) => setAttributes({ advancedMode })}
          />
          {advancedMode && (
            <>
              <ToggleControl
                label={__('Include list of supplies')}
                checked={includeSuppliesList}
                onChange={(includeSuppliesList) =>
                  setAttributes({ includeSuppliesList })
                }
              />
              <ToggleControl
                label={__('Include list of tools')}
                checked={includeToolsList}
                onChange={(includeToolsList) =>
                  setAttributes({ includeToolsList })
                }
              />
              <ToggleControl
                label={__('Display the unit first in cost')}
                checked={showUnitFirst}
                onChange={(showUnitFirst) => setAttributes({ showUnitFirst })}
              />
            </>
          )}
          {useSections && (
            <RadioControl
              label={__('Section list style')}
              selected={sectionListStyle}
              options={['none', 'ordered', 'unordered'].map((a) => ({
                label: __(a),
                value: a,
              }))}
              onChange={(sectionListStyle) =>
                setAttributes({ sectionListStyle })
              }
            />
          )}
        </PanelBody>
        {activeImage.width > 0 && (
          <PanelBody title={__('Desktop image display settings')}>
            <RangeControl
              label={__('Image width')}
              value={activeImage.width}
              onChange={(imageWidth) => {
                if (currentStep === 'final') {
                  setAttributes({ finalImageWidth: imageWidth })
                } else {
                  const parsed = currentStep.split('-')
                  const sectionClone = JSON.parse(JSON.stringify(section))
                  if (useSections) {
                    sectionNum = parseInt(parsed[1])
                    stepNum = parseInt(parsed[3])
                  } else {
                    stepNum = parseInt(parsed[1])
                  }
                  sectionClone[Math.max(sectionNum, 0)].steps[
                    stepNum
                  ].stepPic.width = imageWidth

                  setAttributes({ section: sectionClone })
                }
              }}
              min={200}
              max={800}
            />
            <SelectControl
              label={__('Image float')}
              value={activeImage.float}
              onChange={(newFloatValue) => {
                if (currentStep === 'final') {
                  setAttributes({ finalImageFloat: newFloatValue })
                } else {
                  const parsed = currentStep.split('-')
                  const sectionClone = JSON.parse(JSON.stringify(section))
                  if (useSections) {
                    sectionNum = parseInt(parsed[1])
                    stepNum = parseInt(parsed[3])
                  } else {
                    stepNum = parseInt(parsed[1])
                  }
                  sectionClone[Math.max(sectionNum, 0)].steps[
                    stepNum
                  ].stepPic.float = newFloatValue

                  setAttributes({ section: sectionClone })
                }
              }}
              options={['none', 'left', 'right'].map((a) => ({
                label: a,
                value: a,
              }))}
            />
          </PanelBody>
        )}
        {advancedMode && includeSuppliesList && (
          <PanelBody title={__('Supplies list settings')}>
            <ToggleControl
              label={__('Enable adding image for each supply')}
              checked={addSupplyImages}
              onChange={(addSupplyImages) => setAttributes({ addSupplyImages })}
            />
            <RadioControl
              label={__('Supplies list style')}
              selected={suppliesListStyle}
              options={['none', 'ordered', 'unordered'].map((a) => ({
                label: __(a),
                value: a,
              }))}
              onChange={(suppliesListStyle) =>
                setAttributes({ suppliesListStyle })
              }
            />
          </PanelBody>
        )}
        {advancedMode && includeToolsList && (
          <PanelBody title={__('Tools list settings')}>
            <ToggleControl
              label={__('Enable adding image for each tool')}
              checked={addToolImages}
              onChange={(addToolImages) => setAttributes({ addToolImages })}
            />
            <RadioControl
              label={__('Tools list style')}
              selected={toolsListStyle}
              options={['none', 'ordered', 'unordered'].map((a) => ({
                label: __(a),
                value: a,
              }))}
              onChange={(toolsListStyle) => setAttributes({ toolsListStyle })}
            />
          </PanelBody>
        )}
        <PanelBody title={__('Tag Settings')}>
          <SelectControl
            label={__('Howto title tag')}
            value={firstLevelTag}
            options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
            onChange={(firstLevelTag) => setAttributes({ firstLevelTag })}
          />
          <SelectControl
            label={__('Section title tag')}
            value={secondLevelTag}
            options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
            onChange={(secondLevelTag) => setAttributes({ secondLevelTag })}
          />
          <SelectControl
            label={__('Step title tag')}
            value={thirdLevelTag}
            options={tagList.map((tag) => ({ label: __(tag), value: tag }))}
            onChange={(thirdLevelTag) => setAttributes({ thirdLevelTag })}
          />
        </PanelBody>
      </InspectorControls>
    )
  }
}
