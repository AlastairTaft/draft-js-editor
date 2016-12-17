/**
 * Builds folders that match pages and adds index.html files.
 */
import fs from 'fs'
import path from 'path'
import routes from './../src/routes'

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

routes.forEach(route => {
	let folderPath = docsFolder + '/' + route.path
	fs.mkdirSync(folderPath)
	fs.writeFileSync(folderPath + '/index.html', getTemplate('../'))
})
