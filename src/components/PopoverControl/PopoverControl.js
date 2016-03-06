import React, { Component } from 'react'

const styles = {
	container: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		//border: '1px solid rgba(204, 204, 204, 0.5);',
		borderRadius: 5,
	},
	iconContainer: {
		display: 'inline-block',
    height: 24,
    width: 24,
    cursor: 'pointer',
	},
	selectedIconContainer: {

	},
}


const iconFill = '#000000',
  selectedIconFill = '#2000FF'



export default class PopoverControl extends Component {

	static propTypes = {
		style: React.PropTypes.object,
		toggleInlineStyle: React.PropTypes.func,
		currentInlineStyle: React.PropTypes.object,
	};

	toggleInlineStyle = (style) => {
		if (this.props.toggleInlineStyle)
			this.props.toggleInlineStyle(style)
	};

	render = () => {


		return <div
			style={Object.assign({}, styles.container, this.props.style)}
		>
			<div
				style={Object.assign({}, 
					styles.iconContainer,
					this.props.currentInlineStyle 
						&& this.props.currentInlineStyle.has('BOLD') 
						? styles.selectedIconContainer : null,
				)}
				onMouseDown={(e) => {
					e.preventDefault()
					this.toggleInlineStyle('BOLD')
				}}
			>
				<svg fill={this.props.currentInlineStyle 
						&& this.props.currentInlineStyle.has('BOLD') 
						? selectedIconFill : iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
				  <path d="M0 0h24v24H0z" fill="none"/>
				</svg>
			</div>
			<div
				style={Object.assign({}, 
					styles.iconContainer,
					this.props.currentInlineStyle 
						&& this.props.currentInlineStyle.has('ITALIC') 
						? styles.selectedIconContainer : null,
				)}
				onMouseDown={(e) => {
					e.preventDefault()
					this.toggleInlineStyle('ITALIC')
				}}
			>
				<svg fill={this.props.currentInlineStyle 
						&& this.props.currentInlineStyle.has('ITALIC') 
						? selectedIconFill : iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M0 0h24v24H0z" fill="none"/>
			    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
				</svg>
			</div>
			<div
				style={styles.iconContainer}
				onMouseDown={(e) => {
					e.preventDefault()
					this.toggleInlineStyle('LINK')
				}}
			>
				<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M0 0h24v24H0z" fill="none"/>
			    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
				</svg>
			</div>
		</div>
	}
}
