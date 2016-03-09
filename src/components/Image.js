import React, { Component } from 'react'

export default class Image extends Component {

	render = () => {
		return <figure
      contentEditable={false}>
      <img src={this.props.src} />
    </figure>
	}
}