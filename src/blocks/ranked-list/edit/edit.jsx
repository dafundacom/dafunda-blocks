import { useState, useEffect } from 'react'
import { useBlockProps } from '@wordpress/block-editor'
import { ButtonAddStep } from '../../../components/button_add_step'
import { Card } from './components/card'
import dummyDatas from './data'

const { __ } = wp.i18n // Import __() from wp.i18n

const { InspectorControls } = wp.blockEditor || wp.editor

const { PanelBody } = wp.components

const moveElement = (array, from, to) => {
  const copy = [...array]
  const valueToMove = copy.splice(from, 1)[0]
  copy.splice(to, 0, valueToMove)
  return copy
}

const list_interface = {
  title: '',
  description: '',
  imageurl: '',
  imagealt: '',
  imageid: '',
  likes: [],
  dislikes: [],
}

export default function Edit(props) {
  const {
    attributes: { blockID },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    _isSelected,
  } = props

  let {
    attributes: { lists },
  } = props

  const [listsState, setLists] = useState(lists)

  useEffect(() => {
    if (
      blockID === ''
      || getClientIdsWithDescendants().some(
        (ID) => 'blockID' in getBlock(ID).attributes
          && getBlock(ID).attributes.blockID === blockID,
      )
    ) {
      setAttributes({ blockID: block.clientId })
    }
    if (listsState.length === 0) setLists([{ ...list_interface }])

    return () => {
      wp.data.dispatch('core/editor').unlockPostSaving('requiredValueLock')
      wp.data.dispatch('core/editor').enablePublishSidebar();
    }
  }, [])

  useEffect(() => {
    setAttributes({ lists: listsState })
    if (listsState.every((list) => list.title === "")) {
      wp.data.dispatch('core/editor').lockPostSaving('requiredValueLock')
      wp.data.dispatch('core/editor').disablePublishSidebar();
    } else {
      wp.data.dispatch('core/editor').unlockPostSaving('requiredValueLock')
      wp.data.dispatch('core/editor').enablePublishSidebar();
    }
  }, [listsState])

  return (
    <div {...useBlockProps()}>
      <InspectorPanel {...props} />
      <div className="wp-block">
        {window.location.host === 'localhost:3000' ? (
          <button
            onClick={() => {
              lists = dummyDatas
              setLists(dummyDatas)
            }}
            type="button"
          >
            Reset Data
          </button>
        ) : (
          ''
        )}

        <ol className="ranked-list p-0" id={`ranked-list-${blockID}`}>
          {listsState.map((list, index) => (
            <Card
              data={list}
              index={index}
              key={index}
              {...props}
              editList={(newList) => {
                listsState[index] = Object.assign(listsState[index], newList)
                setLists([...listsState])
              }}
              deleteList={() => {
                setLists([
                  ...listsState.slice(0, index),
                  ...listsState.slice(index + 1, listsState.length),
                ])
              }}
              moveUp={() => {
                if (index > 0) {
                  setLists([...moveElement(listsState, index, index - 1)])
                }
              }}
              moveDown={() => {
                if (index < listsState.length - 1) {
                  setLists([...moveElement(listsState, index, index + 1)])
                }
              }}
            />
          ))}
        </ol>
        <ButtonAddStep
          label="Tambah list"
          onClick={() => {
            setLists((prevData) => [...prevData, { ...list_interface }])
          }}
        />
      </div>
    </div>
  )
}

function InspectorPanel(_props) {
  return (
    <InspectorControls>
      <PanelBody title={__('Ranked List Settings')} />
    </InspectorControls>
  )
}
