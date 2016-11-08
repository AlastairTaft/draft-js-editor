import { Map } from 'immutable'
import { DefaultDraftBlockRenderMap } from 'draft-js'


const blockRenderMap = Map({
  'atomic': {
    // The only reason for overriding the blockRenderMap is to change the
    // atomic element from a 'figure' to a div.
    element: 'div',
  },
})

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

export default extendedBlockRenderMap