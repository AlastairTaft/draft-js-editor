import React, { Component } from 'react'
import Editor from 'draft-js-editor/lib/Editor'
import defaultBlockButtons from 'draft-js-editor/lib/components/SideControl/defaultButtons.js'
import { RichUtils, EditorState, Modifier } from 'draft-js'
import Immutable from 'immutable'
import Draft from 'draft-js'
import insertAtomicBlock from 'draft-js-editor/lib/modifiers/insertAtomicBlock'
const blockButtons = defaultBlockButtons.slice()

class MyCustomBlock extends React.Component {
  render = () => {
    const props = this.props
    
    return <div 
      style={{
        color: 'red',
        border: '1px solid red',
      }}>
        This is a custom block
      </div>
  }
}


function customBlockRenderer(contentBlock) {
  const type = contentBlock.getType();
  
  if (type === 'atomic') {
    const data = contentBlock.getData().toJS()
    if (data.type == 'custom-block')
      return {
        component: MyCustomBlock,
        editable: false,
        props: {},
      }
  }
}

class CustomBlockButtonDemo extends Component {
  
  state = {}

  render = () => {
    
    return <div style={{display: 'inline-block'}}>
      <p>This demonstrates adding a custom block component to the default
      buttons. We're using the standard draft-js api by making use of the <a href="https://facebook.github.io/draft-js/docs/api-reference-editor.html#blockrendererfn">blockRenderFn</a> property.</p>

      <p>There does exist a <a href="https://facebook.github.io/draft-js/docs/advanced-topics-custom-block-render-map.html#content">blockRenderMap</a> property 
      but this doesn't do what we are after. We want to add an atomic block 
      that can't have it's contents edited. If you want to add contents that 
      the editor can take control of then I'd recommend looking into using
      the blockRenderMap property instead.
      </p>
      <p>We make use of the draft-js native properties because all properties 
      that the draft-js-editor component does not understand are passed through
      to the draft-js instance.</p>
      <div style={{padding: 40}}>
        <Editor 
          placeholder="Write your content..." 
          blockButtons={blockButtons}
          onChange={(editorState) => this.setState({ editorState })}
          editorState={this.state.editorState}
          blockRendererFn={customBlockRenderer}
        />
      </div>
    </div>
  }
}

class TestBlockButton extends React.Component {

  render = () => {

    const { editorState, updateEditorState } = this.props

    return <div
      style={{
        display: 'inline-block', 
        verticalAlign: 'super',
        border: '1px solid black',
        borderRadius: 3,
      }}
      onMouseDown={(e) => {
        e.preventDefault()
        /*var newEditorState = RichUtils.toggleBlockType(editorState, 'atomic')
        var newContentState = Modifier.setBlockData(
          newEditorState.getCurrentContent(), 
          newEditorState.getSelection(),
          {
            type: 'custom-block'
          }
        )
        newEditorState = EditorState.push(newEditorState, newContentState, 'change-block-data')
        updateEditorState(newEditorState)*/
        updateEditorState(insertAtomicBlock(editorState, { type: 'custom-block' }))
      }}
    >
      Custom Block
    </div>
  };
}

// Add our custom button to the default inline buttons
blockButtons.push(<TestBlockButton />)

export default CustomBlockButtonDemo
