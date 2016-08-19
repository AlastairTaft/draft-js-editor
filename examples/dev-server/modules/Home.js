import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render(){
    return <div>
      <Link to="/basic">Basic Editor</Link>
      <Link to="/custom-inline-button">Custom Inline Button</Link>
    </div>
  }
}

export default Home