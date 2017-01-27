import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

const styles = {
	iconContainer: {
		display: 'inline-block',
    height: 24,
    width: 24,
	},
}

class BlockButton extends Component {
	
	static propTypes = {

    /**
     * The icon colour. This gets passed down from the Editor.
     */
    iconColor: React.PropTypes.string,
    
    /**
     * The icon colour when selected. This gets passed down from the Editor.
     */
    iconSelectedColor: React.PropTypes.string,

    /**
     * The current editorState. This gets passed down from the editor.
     */
    editorState: React.PropTypes.object,

    /**
     * A method that can be called to update the editor's editorState. This 
     * gets passed down from the editor.
     */
    updateEditorState: React.PropTypes.func,

    /**
     * The block type this button is responsible for.
     */
    blockType: React.PropTypes.string,
  };

  isSelected = (editorState, blockType) => {
    const selection = editorState.getSelection()
    const selectedBlock = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
    if (!selectedBlock) return false
    const selectedBlockType = selectedBlock.getType()
    return selectedBlockType == blockType
  };

	render = () => {

		const { editorState, blockType, children, updateEditorState,
			iconColor, iconSelectedColor, ...otherProps } = this.props

		const selected = this.isSelected(editorState, blockType) 
		const fill = selected ? iconSelectedColor : iconColor

		return <div
      style={styles.iconContainer}
      onMouseDown={(e) => {
        e.preventDefault()
        updateEditorState(RichUtils.toggleBlockType(editorState, blockType))
      }}
      {...otherProps}
    >
      {React.Children.map(this.props.children, 
        c => React.cloneElement(c, { fill, selected }))}
    </div>
	}
}

export default BlockButton