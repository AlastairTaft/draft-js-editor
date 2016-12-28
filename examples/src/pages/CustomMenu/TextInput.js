import React, { Component } from 'react'

class TextInput extends Component {
	render = () => {
		return <input type="text" {...this.props} />
	}
}

export default TextInput