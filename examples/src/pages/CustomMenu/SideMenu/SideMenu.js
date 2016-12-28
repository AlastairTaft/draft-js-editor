import React, { Component } from 'react'
import Swipe from 'react-easy-swipe'
import {Motion, spring} from 'react-motion'
import jss from 'jss'
import preset from 'jss-preset-default'
import Button from './Button'
import insertBlock from 'draft-js-editor/lib/modifiers/insertBlock'

jss.setup(preset())

jss.createStyleSheet({
  '.SideMenu': {
    //position: 'fixed',
    position: 'relative',
    left: 0,
    top: 0,
    width: 200,
    height: '100vh',
    backgroundColor: 'red',
  },
  '.SideMenu-contents': {
  	width: '100vw',
  	position: 'fixed',
  	left: 0,
  	top: 0,
  	boxSizing: 'border-box',
  	// This is the nav bar offset
  	paddingRight: 20,
  },
}, {named: false}).attach()

class SideMenu extends Component {
	
	state = {
		left: 0,
	};

	onSwipeStart = (e) => {
		const { left } = this.state
		this.setState({ leftStart: left, })
  };

	onSwipeMove = (position) => {
		const { leftStart } = this.state
		this.setState({
      left: leftStart + position.x,
    })
    // This triggers e.preventDefault() so the page doesn't scroll
    return true
  };

  onSwipeEnd = () => {
  	const { left } = this.state

  	const snapPositions = [-180, 0]
  	var closest = snapPositions.reduce((prev, curr) => 
  		(Math.abs(curr - left) < Math.abs(prev - left) ? curr : prev))

  	this.setState({
  		left: closest,
		})
  };

	render = () => {
		const { children, editorState, onEditorStateChange } = this.props
		const { left } = this.state

		return <Motion 
      defaultStyle={{
        left: 0,
      }} 
      style={{
        left: spring(left),
      }}
    >
      {({ left }) => {
          return <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
        >
          <div className="SideMenu" style={{left}}>
            <Button
              onClick={() => onEditorStateChange(insertBlock(editorState, 'textInput'))}
            >
              Text
            </Button>
          </div>
          <div className="SideMenu-contents" style={{left: left + 200}}>
          	{children}
          </div>
        </Swipe>
      }}
    </Motion>
	};
}

export default SideMenu