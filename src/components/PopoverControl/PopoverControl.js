import PropTypes from 'prop-types';
import React, { Component } from 'react'
import defaultButtons from './defaultButtons.js'

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //border: '1px solid rgba(204, 204, 204, 0.5);',
    borderRadius: 5,
  },
}

export default class PopoverControl extends Component {

	static propTypes = {
		/**
		 * The popover container style
		 */
		style: PropTypes.object,
		
		toggleInlineStyle: PropTypes.func,
		currentInlineStyle: PropTypes.object,

		/**
		 * The icon fill colour
		 */
		iconColor: PropTypes.string,

		/**
		 * The icon fill colour when selected
		 */
		iconSelectedColor: PropTypes.string,

    /**
     * The current editorState
     */
    editorState: PropTypes.object,

    /**
     * Can call this to update the editor state
     */
    updateEditorState: PropTypes.func,

    /**
     * The inline buttons to use, if this is omitted will use the default
     * buttons, bold, italic and link.
     */
    buttons: PropTypes.array,
	};

	static defaultProps = {
    iconColor: '#000000',
    iconSelectedColor: '#2000FF',
  };


	render = () => {

    const { 
      updateEditorState, 
      editorState, 
      iconColor, 
      iconSelectedColor, 
      buttons, } = this.props

		return <div
			style={Object.assign({}, styles.container, this.props.style)}
		>

			{(buttons || defaultButtons).map(button => React.cloneElement(button, {
          // Pass down some useful props to each button
          updateEditorState,
          editorState,
          iconColor,
          iconSelectedColor,
        })
      )}
		</div>
	}
}
