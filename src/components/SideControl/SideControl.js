import React, { Component } from 'react'
import MoreOptions from './MoreOptions'


  
const styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: 999,
	},
	inner: {
		display: 'inline-block', 
		cursor: 'pointer',
		width: 24,
		height: 24,
		border: '1px solid #ddd',
		padding: 6,
		borderRadius: '50%',
		backgroundColor: 'white',
	},
}




export default class SideControl extends Component {

	static propTypes = {
		style: React.PropTypes.object,
		onImageClick: React.PropTypes.func,
		toggleBlockType: React.PropTypes.func,
		selectedBlockType: React.PropTypes.string,

		/**
		 * The icon fill colour
		 */
		iconColor: React.PropTypes.string,

		/**
		 * The icon fill colour when selected
		 */
		iconSelectedColor: React.PropTypes.string,

    /**
     * Override the inline styles for the popover component.
     */
    popoverStyle: React.PropTypes.object,

    /**
     * Override the block buttons.
     */
    buttons: React.PropTypes.array,
	};

	static defaultProps = {
		iconColor: '#000000',
		iconSelectedColor: '#2000FF',
	};

	state = {
		moreOptionsVisible: false, 
	};

	onMouseOut = (e) => {

		// We only care when it mouse's out the container div
		if (e.target != this.moreOptionsDiv_) return

		const { clientX, clientY } = this.state

		var angle = Math.atan2(e.clientY - clientY, e.clientX - clientX) * 180 / Math.PI
		
		if (angle < 0 && angle >= -90){
			this.setState({moreOptionsVisibleTimeout: true})
			setTimeout(() => this.hideMoreOptionsTimeoutCallback(), 1000)
		} else {
			this.setState({
				moreOptionsVisibleTimeout: false,
				moreOptionsVisible: false,
			})
		}
	};

	hideMoreOptionsTimeoutCallback = () => {
		const { moreOptionsVisibleTimeout } = this.state
		if (moreOptionsVisibleTimeout)
			this.setState({
				moreOptionsVisible: false
			})
	};

	onMouseMove = (e) => {
		this.setState({
			clientX: e.clientX,
			clientY: e.clientY,
		})
	};

	render = () => {

		const { 
			iconColor, 
			iconSelectedColor, 
			popoverStyle, 
			buttons,
			editorState,
			updateEditorState,
		} = this.props


		return <div
			style={Object.assign({}, styles.container, this.props.style)}
		>
			
			{/*<svg 
				style={{cursor: 'pointer'}}
				onMouseDown={(e) => e.preventDefault()}
				onClick={this.props.onImageClick}
				fill={iconColor} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
			</svg>*/}
			
			<div 
				style={styles.inner}
				onMouseOut={this.onMouseOut}
				onMouseMove={this.onMouseMove}
				onMouseOver={(e) => {
					this.setState({
						moreOptionsVisible: true,
					})
				}}
				className="DraftJsEditor-more-options"
				ref={el => this.moreOptionsDiv_ = el}
			>
				{/*<svg 
					onMouseDown={(e) => e.preventDefault()}
					fill={iconColor} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M0 0h24v24H0z" fill="none"/>
			    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>*/}

				<svg 
					onMouseDown={(e) => e.preventDefault()}
					fill={iconColor} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <defs>
		        <path d="M24 24H0V0h24v24z" id="a"/>
			    </defs>
			    <clipPath id="b">
		        <use overflow="visible" />
			    </clipPath>
			    <path clip-path="url(#b)" d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
				</svg>
				<MoreOptions 
					style={Object.assign({}, popoverStyle, {
						display: this.state.moreOptionsVisible ? 'block' : 'none',
					})}
					toggleBlockType={this.props.toggleBlockType}
					selectedBlockType={this.props.selectedBlockType}
					iconSelectedColor={iconSelectedColor}
					iconColor={iconColor}
					buttons={buttons}
					editorState={editorState}
					updateEditorState={updateEditorState}
					onMouseOver={(e) => {
						this.setState({
							moreOptionsVisible: true,
							moreOptionsVisibleTimeout: false,
						})
					}}
					onMouseOut={(e) => {
						this.setState({
							moreOptionsVisible: false,
						})
					}}
				/>
			</div>
		</div>
	}
}
