/**
 * Builds folders that match pages and adds index.html files.
 */
import fs from 'fs'
import path from 'path'
import { routes } from './../src/App.js'

const template = `<!doctype html>
<html>
  <head>
    <title>Sample App</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="/js/bundle.js"></script>
  </body>
</html>
`

let publicFolder = path.resolve(__dirname, '../public')
// Create the root index file
fs.mkdirSync(publicFolder)
fs.writeFileSync(publicFolder + '/index.html', template)

routes.forEach(route => {
	let folderPath = publicFolder + '/' + route.path
	fs.mkdirSync(folderPath)
	fs.writeFileSync(folderPath + '/index.html', template)
})
