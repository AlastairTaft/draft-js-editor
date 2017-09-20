# draft-js-editor
A rich text editor built using facebook's [draft.js](https://facebook.github.io/draft-js/). 


Takes inspiration from the text editors on [medium](http://medium.com) and 
[facebook notes](https://www.facebook.com/notes/).

## Get started
`npm install draft-js-editor --save`


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

## API 

The Editor component accepts all the [draft-js Editor](https://facebook.github.io/draft-js/docs/api-reference-editor.html#content) props with the following additional ones.

## Editor Props

  - `iconColor` The color of the icons
  - `iconSelectedColor` The color of the icon when selected
  - `popoverStyle` Override the inline styles for the popover menu controls
  - `inlineButtons` This should be an array of React elements that will be rendered. Use this to customise the popover inline buttons. There's a 'Custom Inline Buttons' example under examples. Each element that gets rendered gets passed the following props: updateEditorState (call this after doing any editor state manipulations), editorState (the editor state), iconColor, iconSelectedColor.
  - `blockButtons` Customise the block buttons. See the custom block button example
  - `blockTypes` An object mapping custom types to components. Simpler than using draft-js's native blockRenderFn property.
  - `showInlineButtons` Set to false to prevent showing the inline buttons.
  - `SideControl` Override the side control to completely customise the interface. See the demo for an example.
  
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



