/**
 * This is a wrapper around the insert atomic block that puts the type in 
 * the atomic blocks data object.
 */

import insertAtomicBlock from './insertAtomicBlock'

export default function insertBlock(editorState, blockType){
	return insertAtomicBlock(editorState, { type: blockType })
}