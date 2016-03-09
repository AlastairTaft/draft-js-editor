import React, { Component } from 'react'
import {Entity} from 'draft-js';

export default class MediaWrapper extends Component {
	render = () => {
		const {block, foo} = this.props;
    const data = Entity.get(block.getEntityAt(0)).getData();
    // Pass data down to the child component
    
    var child = React.cloneElement(this.props.blockProps.child, { 
    	...data,
    })
    return child
	}
}