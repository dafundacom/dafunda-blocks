const { __ } = wp.i18n // Import __() from wp.i18n
const { InspectorControls } = wp.blockEditor || wp.editor

const { ToggleControl, PanelBody } = wp.components

export function InspectorPanel(props) {
  let {
    attributes: { openNewTab },
    setAttributes,
  } = props
  return (
    <InspectorControls>
      <PanelBody title={__('Ranked List Settings')}>
        <ToggleControl
          label={__('Open link in new tab')}
          checked={openNewTab}
          onChange={(openNewTab) => {
            setAttributes({ openNewTab })
          }}
        />
      </PanelBody>
    </InspectorControls>
  )
}
