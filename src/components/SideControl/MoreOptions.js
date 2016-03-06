import React, { Component } from 'react'


const popoverSpacing = 3 // The distance above the selection that popover 
  // will display

const styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: -24 - popoverSpacing,
		width: 24 * 6,
		zIndex: 999,
		height: 24 + popoverSpacing,
	},
	innerContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		//border: '1px solid rgba(204, 204, 204, 0.5);',
		borderRadius: 5,
		height: 24,
	},
	iconContainer: {
		display: 'inline-block',
    height: 24,
    width: 24,
	},
	selectedIconContainer: {

	},
}


const iconFill = '#000000',
  selectedIconFill = '#2000FF'

export default class MoreOptions extends Component {

	static propTypes = {
		style: React.PropTypes.object,
		toggleBlockType: React.PropTypes.func,
		selectedBlockType: React.PropTypes.string,
	};

	toggleBlockType = (blockType) => {
		if (this.props.toggleBlockType)
			this.props.toggleBlockType(blockType)
	};

	render = () => {
		return <div style={Object.assign({}, styles.container, this.props.style)}>
			<div style={styles.innerContainer}>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'header-one' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('header-one')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'header-one' 
							? selectedIconFill: iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M5 4v3h5.5v12h3V7H19V4z"/>
				    <path d="M0 0h24v24H0V0z" fill="none"/>
					</svg>
				</div>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'header-two' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('header-two')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'header-two' 
							? selectedIconFill: iconFill} height="24" viewBox="-3 -6 30 30" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M5 4v3h5.5v12h3V7H19V4z"/>
				    <path d="M0 0h24v24H0V0z" fill="none"/>
					</svg>
				</div>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'unordered-list-item' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('unordered-list-item')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'unordered-list-item' 
							? selectedIconFill: iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
				    <path d="M0 0h24v24H0V0z" fill="none"/>
					</svg>
				</div>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'ordered-list-item' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('ordered-list-item')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'ordered-list-item' 
							? selectedIconFill: iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
				    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</div>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'blockquote' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('blockquote')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'blockquote' 
							? selectedIconFill: iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
				    <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</div>
				<div
					style={Object.assign({}, 
						styles.iconContainer,
						this.props.selectedBlockType == 'code' 
							? styles.selectedIconContainer : null,
					)}
					onMouseDown={(e) => {
						e.preventDefault()
						this.toggleBlockType('code')
					}}
				>
					<svg fill={this.props.selectedBlockType == 'code' 
							? selectedIconFill: iconFill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M0 0h24v24H0V0z" fill="none"/>
				    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
					</svg>
				</div>
			</div>
		</div>
	}
}