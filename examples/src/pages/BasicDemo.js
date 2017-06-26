import React, { Component } from 'react'
import Editor from 'draft-js-editor/lib/Editor'

class BasicDemo extends Component {

  state = {};

  render = () => {
    return <div style={{display: 'inline-block'}}>
    	<p>This shows what the editor looks like straight out of the box without
    	any customisations.</p>
    	<div style={{padding: 40}}>
	      <Editor 
	        placeholder="Write your content..." 
          onChange={(editorState) => this.setState({ editorState })}
          editorState={this.state.editorState}
          readOnly={false}
	      />
	    </div>
    </div>
  }
}

//

export default BasicDemo