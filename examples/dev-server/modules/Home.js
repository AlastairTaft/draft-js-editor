import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render(){
    return <ul>
      <li><Link to="/basic">Basic Editor</Link></li>
      <li><Link to="/custom-inline-button">Custom Inline Button</Link></li>
      <li><Link to="/multiple-editors-test">Multiple Editors Test</Link></li>
      <li><Link to="/raw-content-test">Raw Content Test</Link></li>
    </ul>
  }
}

export default Home