import React, { Component } from 'react'
import Editor from './../../../src/Editor'
import defaultInlineButtons from './../../../src/components/PopoverControl/defaultButtons.js'
import { RichUtils } from 'draft-js'

const inlineButtons = defaultInlineButtons.slice()

class CustomInlineButtonDemo extends Component {
  render = () => {
    
    return <div>
      <p>This demonstrates adding a custom inline button to the default
      buttons. It's a simple button that you can use to toggle highlighting 
      the text in pink.</p>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Write your content..." 
          // We have to add a custom style map, this gives all the PINK
          // style types the below inline styling
          customStyleMap={{
            'PINK': {
              color: 'pink',
            },
          }}
          inlineButtons={inlineButtons}
        />
      </div>
    </div>
  }
}

const styles = {
  pinkButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: 'pink',
    border: '1px solid grey',
    borderRadius: 2,
    padding: '1px 2px',
    cursor: 'pointer',
  },
}

class PinkToggleButton extends React.Component {

  render = () => {

    const { editorState, updateEditorState } = this.props

    const currentInlineStyle = editorState.getCurrentInlineStyle()
    const selected = currentInlineStyle.has('PINK')

    return <div
      style={Object.assign({}, styles.pinkButton, {
        color: selected ? 'PINK' : 'GREY',
      })}
      onMouseDown={(e) => {
        e.preventDefault()
        updateEditorState(RichUtils.toggleInlineStyle(editorState, 'PINK'))
      }}
    >
      PINK BUTTON
    </div>
  };
}

// Add our custom button to the default inline buttons
inlineButtons.push(<PinkToggleButton />)

export default CustomInlineButtonDemo