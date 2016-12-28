import React, { Component } from 'react'
import Editor from 'draft-js-editor'
import SideMenu from './SideMenu'
import TextInput from './TextInput'

class CustomMenu extends Component {

	state = {};

	onEditorStateChange = (editorState) => this.setState({ editorState });

	render = () => {
		return <div style={{padding: 20}}>
			<SideMenu 
				onEditorStateChange={this.onEditorStateChange} 
				editorState={this.state.editorState}
			/>
			<Editor 
        onChange={this.onEditorStateChange}
        editorState={this.state.editorState}
        blockTypes={{
          'textInput': TextInput,
        }}
      />
		</div>
	}
}

export default CustomMenu