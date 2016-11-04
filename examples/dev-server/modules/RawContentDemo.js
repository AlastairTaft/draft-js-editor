import React, { Component } from 'react'
import Editor from './../../../src/Editor'
import defaultDecorator from './../../../src/components/defaultDecorator'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'

const rawContent = {
  blocks: [
    {
      text: 'Sample component text',
      type: 'atomic',
    },
    {
      text: (
        'This is some sample text'
      ),
      type: 'unstyled',
    },
  ],

  entityMap: {
  },
};

var contentState = convertFromRaw(rawContent)
var editorState = EditorState.createWithContent(
  //ContentState.createFromBlockArray(contentState),
  contentState,
  defaultDecorator
)

class RawContentDemo extends Component {

  state = {
    editorState,
  };

  constructor(props){
    super(props)
  };

  render = () => {
    return <div>
    	<p>Testing rendering raw content</p>
    	<div style={{padding: 40}}>
	      <Editor 
	        placeholder="Write your content..." 
          onChange={(editorState) => this.setState({ editorState })}
          editorState={this.state.editorState}
	      />
	    </div>
    </div>
  }
}

export default RawContentDemo