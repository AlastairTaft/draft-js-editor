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

let publicFolder = path.resolve(__dirname, '../public')
// Create the root index file
fs.mkdirSync(publicFolder)
fs.writeFileSync(publicFolder + '/index.html', getTemplate())

routes.forEach(route => {
	let folderPath = publicFolder + '/' + route.path
	fs.mkdirSync(folderPath)
	fs.writeFileSync(folderPath + '/index.html', getTemplate('../'))
})
