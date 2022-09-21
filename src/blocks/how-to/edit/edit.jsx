import { useBlockProps } from '@wordpress/block-editor'
import { useState } from 'react'
import { HowTo, InspectorPanel } from './components'

export default function Edit(props) {
  const [states, setStates] = useState({ videoURLInput: '', currentStep: '' })

  return (
    <div {...useBlockProps()}>
      <InspectorPanel
        {...props}
        states={states}
        setStates={(newState) => setStates({ ...states, ...newState })}
        updateState={(newState) => setStates(newState)}
        currentStep={states.currentStep}
      />
      <HowTo
        {...props}
        states={states}
        setStates={(newState) => setStates({ ...states, ...newState })}
      />
    </div>
  )
}
