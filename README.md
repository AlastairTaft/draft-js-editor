# draft-js-editor

A rich text editor built using facebook's [draft.js](https://facebook.github.io/draft-js/). 

Takes inspiration from the text editors on [medium](http://medium.com) and 
[facebook notes](https://www.facebook.com/notes/).

# Get started

### Cloning from github
Run `npm install` then `npm start` to start an example

### Here from npm?

Run `npm install draft-js-editor --save`

##### Usage Example

Import the `Editor` class into your file. The example below uses [ES6](https://babeljs.io/) but it's not mandatory.

```javascript
import React, { Component } from 'react'
import Editor from 'draft-js-editor'

class MyClass extends Component {
  render() {
  	return <div>
  	  A sample text editor
  	  <Editor />
	  </div>
  }
}
```

We recommend you add the miniumum styling to your document to avoid a collapsing
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

### getContent()
Returns an object with an `entityMap` (Object) and `blocks` (Array) keys. 
Internally it just calls [`convertToRaw`](https://facebook.github.io/draft-js/docs/api-reference-data-conversion.html) and returns the result.

You can re-populate the state by passing in what's returned from this function
as a `content` property on the component.



