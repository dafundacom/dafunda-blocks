/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor'
// import { useState } from "react";

const Save = (props) => {
  const {
    attributes: { content },
  } = props
  const blockProps = useBlockProps.save()

  //   const [buttonVisibility, setButtonVisibility] = useState(false);
  return (
    <>
      <RichText.Content {...blockProps} tagName='p' value={content} />
      {/* <button onClick={() => setButtonVisibility(!buttonVisibility)}>
        Toggle
      </button> */}
      {/* {buttonVisibility && <p>Show</p>} */}
    </>
  )
}
export default Save
