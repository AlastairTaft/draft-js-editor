import React, { Component } from 'react'
import BlockButton from './BlockButton'

export default props => <BlockButton {...props} blockType='header-one' className="DraftJsEditor-header-one">
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4v3h5.5v12h3V7H19V4z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
	</svg>
</BlockButton>
