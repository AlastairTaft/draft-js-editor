import React from 'react'
import { create } from 'jss'
import preset from 'jss-preset-default'
import jssGlobal from 'jss-global'

const jss = create()
jss.setup(jssGlobal())
jss.setup(preset())

jss.createStyleSheet({
	'@global': {
		'body': {
			'font-family': "'Roboto', sans-serif",
			margin: 0,
		},
		'.public-DraftEditorPlaceholder-root': {
			position: 'absolute',
			top: 0,
			left: 0,
			color: 'grey',
		},
	}
}, {named: false}).attach()

const sheet = jss.createStyleSheet({
	layout: {
		maxWidth: 600,
		margin: '0 auto',
	},
}).attach()

const styles = sheet.classes

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
    	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      {children}
    </div>
  )
}
