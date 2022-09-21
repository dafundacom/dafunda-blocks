import { useState, useEffect } from 'react'
import { Card, ButtonAddStep, InspectorPanel } from './components'
const { __ } = wp.i18n // Import __() from wp.i18n

const { RichText, MediaUpload, InspectorControls } = wp.blockEditor || wp.editor

const { ToggleControl, PanelBody, RadioControl, RangeControl, SelectControl } =
  wp.components

const moveElement = (array, from, to) => {
  const copy = [...array]
  const valueToMove = copy.splice(from, 1)[0]
  copy.splice(to, 0, valueToMove)
  return copy
}

const list_interface = {
  title: '',
  price: 0,
  pricetag: '',
  subtitle: '',
  description: '',
  imageurl: '',
  imagealt: '',
  imageid: '',
  olshops: [],
  url: '',
}

export default function Edit(props) {
  let {
    attributes: { blockID, lists },
    setAttributes,
    block,
    getBlock,
    getClientIdsWithDescendants,
    isSelected,
  } = props

  const [listsState, setLists] = useState(lists)

  useEffect(() => {
    setAttributes({ lists: listsState })

    let check_title = listsState.every(({ title }) => {
      return title && title != ''
    })

    if (check_title) {
      wp.data.dispatch('core/editor').unlockPostSaving('requiredValueLock')
    } else {
      wp.data.dispatch('core/editor').lockPostSaving('requiredValueLock')
    }
  }, [listsState])

  function validateList(list, index) {
    let newList = {}
    let needUpdate = false
    Object.keys(list_interface).forEach((key, key_i) => {
      if (list[key] == undefined || list[key] == null) {
        needUpdate = true
        newList[key] = list_interface[key]
      } else {
        newList[key] = list[key]
      }
    })
    if (needUpdate) {
      listsState[index] = Object.assign(listsState[index], newList)
      setLists([...listsState])
    }
    return
  }

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

    lists.forEach((list, list_i) => {
      validateList(list, list_i)
    })

    if (listsState.length == 0) setLists([{ ...list_interface }])
  }, [])

  return (
    <>
      <InspectorPanel {...props} />

      <ol className='rekomendasi-list p-0' id={`rekomendasi-list-${blockID}`}>
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
        label='Tambah Rekomendasi List'
        onClick={() => {
          setLists([
            ...listsState,
            {
              ...list_interface,
            },
          ])
        }}
      />
    </>
  )
}
