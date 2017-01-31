import React, { Component } from 'react'
import Editor from 'draft-js-editor'
import SideMenu from './SideMenu'
import TextInput from './TextInput'
import preset from 'jss-preset-default'
import { create } from 'jss'

const jss = create()
jss.setup(preset())

const sheet = jss.createStyleSheet({
	editor: {
		border: '1px solid #ddd',
		boxShadow: 'inset 0 1px 8px -3px #aaa',
	},
}).attach()

const styles = sheet.classes

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
				className={styles.editor}
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