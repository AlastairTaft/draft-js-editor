import React, { Component } from 'react'
import MoreOptions from './MoreOptions'


  
const styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: 999,
	}
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
				style={{display: 'inline-block', cursor: 'pointer'}}
				onMouseOut={(e) => {
					this.setState({
						moreOptionsVisible: false,
					})
				}}
				onMouseOver={(e) => {
					this.setState({
						moreOptionsVisible: true,
					})
				}}
				className="DraftJsEditor-more-options"
			>
				<svg 
					onMouseDown={(e) => e.preventDefault()}
					fill={iconColor} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <path d="M0 0h24v24H0z" fill="none"/>
			    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
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
				/>
			</div>
		</div>
	}
}
