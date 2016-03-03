# draft-js-editor

A rich text editor built using facebook's [draft.js](https://facebook.github.io/draft-js/). 

Takes inspiration from the text editors on [medium](http://medium.com) and 
[facebook notes](https://www.facebook.com/notes/).

# Get started

### Cloning from github
Run `npm install` then `npm start` to start an example

### Here from npm?

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
