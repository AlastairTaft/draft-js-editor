import React, { Component } from 'react'
import { RichUtils } from 'draft-js'

const styles = {
  iconContainer: {
    display: 'inline-block',
    height: 24,
    width: 24,
    cursor: 'pointer',
    verticalAlign: 'middle',
  },
}

/**
 * Helper class to remove the boiler plate in getButtons. And make the 
 * getButtons function easier to read. 
 *
 * As a convenience this passes down the selected and fill props to the children
 * The selected prop is a boolean that's true if the highlighted text in the 
 * editor relates to the inlineStyleType and the fill is the icon colour. Will
 * match the iconColour or selectedIconColor based on the selected property.
 */
class InlineButton extends Component {

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
     * The inline style type this button is responsible for.
     */
    styleType: React.PropTypes.string,
  };

  static defaultProps = {
    selected: false,
  };

  isSelected = (editorState, inlineStyleType) => {

    // Check the editor is focused
    const selection = editorState.getSelection()
    const selectedBlock = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
    if (!selectedBlock) return false

    const currentInlineStyle = editorState.getCurrentInlineStyle()
    return currentInlineStyle.has(inlineStyleType)
  };

  render = () => {

    const { editorState, updateEditorState, iconColor, iconSelectedColor, 
      inlineStyleType,
      ...otherProps } = this.props

    const selected = this.isSelected(editorState, inlineStyleType) 
    const fill = selected ? iconSelectedColor : iconColor

    return <div
      style={styles.iconContainer}
      onMouseDown={(e) => {
        e.preventDefault()
        updateEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyleType))
      }}
      {...otherProps}
    >
      {React.Children.map(this.props.children, 
        c => React.cloneElement(c, { fill, selected }))}
    </div>
  };
}

export default InlineButton