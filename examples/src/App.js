import React, { Component } from 'react'
import Layout from './Layout'
import Home from './pages/Home'
import { Router } from 'react-router'
import { createHistory, useBasename } from 'history'
import routes from './routes'

const browserHistory = useBasename(createHistory)({
  basename: '/draft-js-editor'
})


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
