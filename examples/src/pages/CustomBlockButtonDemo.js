import React, { Component } from 'react'
import Editor from 'draft-js-editor/lib/Editor'
import defaultBlockButtons from 'draft-js-editor/lib/components/SideControl/defaultButtons.js'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import Immutable from 'immutable'
import Draft from 'draft-js'
import insertBlock from 'draft-js-editor/lib/modifiers/insertBlock'
const blockButtons = defaultBlockButtons.slice()

class MyCustomBlock extends React.Component {
  render = () => {
    const props = this.props
    
    return <div 
      style={{
        color: 'red',
        border: '1px solid red',
      }}>
        This is a custom block
      </div>
  }
}

class CustomBlockButtonDemo extends Component {
  
  state = {}

  render = () => {
    
    return <div style={{display: 'inline-block'}}>
      <p>This demonstrates adding a custom block component to the default
      block buttons. It uses the `blockTypes` prop which is specific to this
      'draft-js-editor' package. If you want to use the native 'draft-js' api 
      see the other block components demo.</p>

      <p>It also demonstrates using the `insertBlock` instance method.</p>

      <button onClick={() => this.refs.editor.insertBlock('custom-block')}>
        Insert block using instance method
      </button>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Write your content..." 
          blockButtons={blockButtons}
          onChange={(editorState) => this.setState({ editorState })}
          editorState={this.state.editorState}
          blockTypes={{
            'custom-block': MyCustomBlock,
          }}
          ref="editor"
        />
      </div>
    </div>
  }
}

class TestBlockButton extends React.Component {

  render = () => {

    const { editorState, updateEditorState } = this.props

    return <div
      style={{
        display: 'inline-block', 
        verticalAlign: 'super',
        border: '1px solid black',
        borderRadius: 3,
      }}
      onMouseDown={(e) => {
        e.preventDefault()
        /*var newEditorState = RichUtils.toggleBlockType(editorState, 'atomic')
        var newContentState = Modifier.setBlockData(
          newEditorState.getCurrentContent(), 
          newEditorState.getSelection(),
          {
            type: 'custom-block'
          }
        )
        newEditorState = EditorState.push(newEditorState, newContentState, 'change-block-data')
        updateEditorState(newEditorState)*/
        updateEditorState(insertBlock(editorState, 'custom-block'))
      }}
    >
      Custom Block
    </div>
  };
}

// Add our custom button to the default inline buttons
blockButtons.push(<TestBlockButton />)

export default CustomBlockButtonDemo