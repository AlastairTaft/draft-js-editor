import React, { Component } from 'react'


const styles = {
  image: {
    maxWidth: '100%',
  }
}

export default class Image extends React.Component {

  constructor(props){
    super(props)
  };

  render() {

    return <img contentEditable={false} 
    	src={this.props.src} 
    	style={Object.assign({}, styles.image, this.props.style)} 
  	/>
    
  };
}