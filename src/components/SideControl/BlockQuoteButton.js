import React, { Component } from 'react'
import BlockButton from './BlockButton'

export default props => <BlockButton {...props} blockType='blockquote' className="DraftJsEditor-blockquote">
	<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
</BlockButton>
