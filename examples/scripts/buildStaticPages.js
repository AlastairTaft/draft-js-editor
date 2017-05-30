/**
 * Builds folders that match pages and adds index.html files.
 */
var fs = require('fs')
var path = require('path')

const getTemplate = (pathToRoot = '') => `<!doctype html>
<html>
  <head>
    <title>Sample App</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="${pathToRoot}js/bundle.js"></script>
  </body>
</html>
`

let docsFolder = path.resolve(__dirname, '../../docs')
// Create the root index file
fs.mkdirSync(docsFolder)
fs.writeFileSync(docsFolder + '/index.html', getTemplate())

// Needs to match routes.js
const routePaths = [
  'basic',
  'custom-inline-button',
  'multiple-editors-test',
  'raw-content-test',
  'custom-block-button',
  'custom-block-button-draft-api',
  'custom-menu',
]

routePaths.forEach(path => {
	let folderPath = docsFolder + '/' + path
	fs.mkdirSync(folderPath)
	fs.writeFileSync(folderPath + '/index.html', getTemplate('../'))
})
