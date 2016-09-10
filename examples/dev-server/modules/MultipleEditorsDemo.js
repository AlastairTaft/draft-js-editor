import React, { Component } from 'react'
import Editor from './../../../src/Editor'
import defaultDecorator from './../../../src/components/defaultDecorator'
import { EditorState } from 'draft-js'

class MultipleEditorsDemo extends Component {

  state = {
    //editorState1: EditorState.createEmpty(defaultDecorator),
    //editorState2: EditorState.createEmpty(defaultDecorator),
    //editorState3: EditorState.createEmpty(defaultDecorator),
    //editorState4: EditorState.createEmpty(defaultDecorator),
  };

  render = () => {
    return <div>
      <p>Testing multiple editors on one screen.</p>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Editor 1 placeholder..." 
          onChange={(editorState1) => this.setState({ editorState1 })}
          editorState={this.state.editorState1}
        />
      </div>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Editor 2 placeholder..." 
          onChange={(editorState2) => this.setState({ editorState2 })}
          editorState={this.state.editorState2}
        />
      </div>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Editor 3 placeholder..." 
          onChange={(editorState3) => this.setState({ editorState3 })}
          editorState={this.state.editorState3}
        />
      </div>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Editor 4 placeholder..." 
          onChange={(editorState4) => this.setState({ editorState4 })}
          editorState={this.state.editorState4}
        />
      </div>
    </div>
  }
}

export default MultipleEditorsDemo