import React, { Component } from 'react'
import Editor from './../../../src/Editor'

class BasicDemo extends Component {
  render = () => {
    return <div style={{padding: 40}}>
      <Editor 
        placeholder="Write your content..." 
      />
    </div>
  }
}

export default BasicDemo