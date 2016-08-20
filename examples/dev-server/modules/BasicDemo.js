import React, { Component } from 'react'
import Editor from './../../../src/Editor'

class BasicDemo extends Component {
  render = () => {
    return <div>
    	<p>This shows what the editor looks like straight out of the box without
    	any customisations.</p>
    	<div style={{padding: 40}}>
	      <Editor 
	        placeholder="Write your content..." 
	      />
	    </div>
    </div>
  }
}

export default BasicDemo