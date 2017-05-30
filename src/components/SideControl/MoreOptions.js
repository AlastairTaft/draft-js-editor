import React, { Component } from 'react'
import defaultButtons from './defaultButtons'

const popoverSpacing = 3 // The distance above the selection that popover 
  // will display

const styles = {
	container: {
		position: 'absolute',
		left: 0,
		top: -24 - popoverSpacing,
		//width: 24 * 6,
		height: 24 + popoverSpacing,
		zIndex: 998,
		whiteSpace: 'nowrap',
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

export default class MoreOptions extends Component {

	static propTypes = {
		/**
     * Override the inline styles for the container.
     */
		style: React.PropTypes.object,
		
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
		 * Override the block buttons.
		 */
		buttons: React.PropTypes.array,
	};

	static defaultProps = {
		iconColor: '#000000',
		iconSelectedColor: '#2000FF',
	};

	toggleBlockType = (blockType) => {
		if (this.props.toggleBlockType)
			this.props.toggleBlockType(blockType)
	};

	render = () => {

		const { 
			iconColor, 
			iconSelectedColor, 
			style,
			buttons, 
			updateEditorState,
			editorState,
			...otherProps
		} = this.props

		return <div style={Object.assign({}, styles.container)} {...otherProps}>
			<div style={Object.assign({}, styles.innerContainer, style)}>
				{(buttons || defaultButtons).map(button => React.cloneElement(button, {
	          // Pass down some useful props to each button
	          updateEditorState,
	          editorState,
	          iconColor,
	          iconSelectedColor,
	        })
	      )}
			</div>
		</div>
	}
}