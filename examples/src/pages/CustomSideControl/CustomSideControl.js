import React, { Component } from 'react'
import Editor from 'draft-js-editor/lib/Editor'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import Immutable from 'immutable'
import Draft from 'draft-js'
import SideControl from './SideControl'

class CustomBlockButtonDemo extends Component {
  
  state = {}

  render = () => {
    
    return <div style={{display: 'inline-block'}}>
      <p>This demonstrates overriding the default SideControl, which gives
        you fine grained control over the implementation.</p>

      <div style={{padding: 40}}>
        <Editor 
          placeholder="Write your content..." 
          SideControl={SideControl}
          onChange={(editorState) => this.setState({ editorState })}
          editorState={this.state.editorState}
          ref="editor"
        />
      </div>
    </div>
  }
}

export default CustomBlockButtonDemo
