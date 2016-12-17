import React, { Component } from 'react'
import Layout from './Layout'
import Home from './pages/Home'
import { Router, browserHistory } from 'react-router'
import BasicDemo from './pages/BasicDemo'
import CustomInlineButtonDemo from './pages/CustomInlineButtonDemo'
import MultipleEditorsDemo from './pages/MultipleEditorsDemo'
import RawContentDemo from './pages/RawContentDemo'

export const routes = [
  {
	  path: 'basic',
	  component: BasicDemo,
	},
  {
	  path: 'custom-inline-button',
	  component: CustomInlineButtonDemo,
	},
	{
	  path: 'multiple-editors-test',
	  component: MultipleEditorsDemo,
	},
	{
	  path: 'raw-content-test',
	  component: RawContentDemo,
	},
]

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: Layout,
    indexRoute: {
    	component: Home,
    },
    childRoutes: routes,
  } ]
}


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render() {

  	return <Router history={browserHistory} routes={rootRoute} />
  }
}
