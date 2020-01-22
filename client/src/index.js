import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

import MouseTracker from './MouseTracker'
import { Register } from './Register'
import { Login } from './Login'
<<<<<<< HEAD
// import PageNotFound from './PageNotFound'
=======
import PageNotFound from './PageNotFound'
>>>>>>> 72c97df...  merging branches up-to-date

import './css/index.css'
import * as serviceWorker from './serviceWorker'

const landing = (
	<Router>
		<div className='topbar'>
			<div className='dropdown'>
				<div className='dropbtn'>Menu ▼</div>
				<div className='dropdown-content'>
					<Link onClick={Login}>Login</Link>
					<Link onClick={Register}>Register</Link>
				</div>
			</div>
		</div>
		<Switch>
			{/*
            <Route component={PageNotFound}/>
            */}
		</Switch>
		<MouseTracker />
	</Router>
)

ReactDOM.render(landing, document.getElementById('root'))

serviceWorker.unregister()
