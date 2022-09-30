import { registerBlockType } from '@wordpress/blocks'
import { withSelect } from '@wordpress/data'

import config from './config.mjs'

import Edit from './edit/edit.jsx'
import Icon from './icon'

registerBlockType(config.name, {
  ...config,
  icon: Icon,
  edit: withSelect((select, ownProps) => {
    const { getBlock, getClientIdsWithDescendants } =
      select('core/block-editor') || select('core/editor')

    return {
      block: getBlock(ownProps.clientId),
      getBlock,
      getClientIdsWithDescendants,
    }
  })(Edit),
})
