# draft-js-editor
A rich text editor built using facebook's [draft.js](https://facebook.github.io/draft-js/). 

*Warning: This repo is still a work in progress. Feel free to contribute to make it better*

Takes inspiration from the text editors on [medium](http://medium.com) and 
[facebook notes](https://www.facebook.com/notes/).

## Get started
`npm install draft-js-editor --save`

##### Cloning from github
Run `npm install` then `npm start` to start an example

## Usage

Import the `Editor` class into your file. The example below uses [ES6](https://babeljs.io/) but it's not mandatory.

```javascript
//...
import Editor from 'draft-js-editor'

class MyClass extends React.Component {

  state = {};

  render() {
    return <div>
      A sample text editor
      <Editor 
        onChange={(editorState) => this.setState({ editorState })}
        editorState={this.state.editorState}
      />
    </div>
  }
}
```

We recommend adding the miniumum styling to your document to avoid a collapsing
margins issue and to avoid the placeholder element taking up space.

```css
.DraftEditor-root {
  /* Stop collapsing margins breaking our side control positioning */
  padding-top: 1px;
  position: relative;
}
.public-DraftEditorPlaceholder-root {
  position: absolute;
}
```

## API 

The api for the Editor component, reference it using `refs` 
e.g. `var myEditor = this.refs['myEditor']`

##### insertBlockComponent(String:type, String:componentProps)

Insert a block component into the editor. Returns
the key of the created entity.

  - **type** The component type, set this up with the `blockTypes` property on
    the editor 
  - **componentProps** An object that gets passed into the component as props.


## Editor Props

  - `placeholder` Editor placeholder text
  - `onImageClick` fired when the image icon is clicked, see ImageUpload example
    in the examples folder
  - `blockTypes` Map block types to components
  - `onChange` Fired when the editor content is changed, the first paramater passed back is an [`editorState`](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html) object.
  - `editorState` Pass in an [`editorState`](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html) object to restore an existing state. 
  - `readOnly` Make the editor read only
  - `iconColor` The color of the icons
  - `iconSelectedColor` The color of the icon when selected
  - `popoverStyle` Override the inline styles for the popover menu controls
  - `customStyleMap` See [here](https://facebook.github.io/draft-js/docs/advanced-topics-inline-styles.html#mapping-a-style-string-to-css)
  - `inlineButtons` This should be an array of React elements that will be rendered. Use this to customise the popover inline buttons. There's a 'Custom Inline Buttons' example under examples. Each element that gets rendered gets passed the following props: updateEditorState (call this after doing any editor state manipulations), editorState (the editor state), iconColor, iconSelectedColor.
## Saving the state

If you need to persist the editor state somewhere there are two useful methods that are part of the draft-js library that will let you convert to and from a string, [`convertFromRaw`](https://facebook.github.io/draft-js/docs/api-reference-data-conversion.html#convertfromraw) and [`convertToRaw`](https://facebook.github.io/draft-js/docs/api-reference-data-conversion.html#converttoraw)

These methods require a [`ContentState`](https://facebook.github.io/draft-js/docs/api-reference-content-state.html) which you can obtain by calling [`getCurrentContent`](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html#getcurrentcontent) on the [`editorState`](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html) object returned from the `onChange` event.

##### Hydrating an editor state from raw content

You can use the static [`createWithContent`](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html#createwithcontent) method to obtain an editor state that can be passed in as a parameter to the Editor.

```
import { EditorState, convertFromRaw } from 'draft-js'
const contentState = convertFromRaw(rawContent)
const editorState = EditorState.createWithContent(contentState)
```



