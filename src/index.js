import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

import App from './App'
// import Login from './Login'
// import Register from './Register'
// import PageNotFound from './PageNotFound'

import './css/index.css'
import * as serviceWorker from './serviceWorker'

const landing = (
	<Router>
		<div className='topbar'>
			<div class='dropdown'>
				<div class='dropbtn'>Menu ▼</div>
				<div class='dropdown-content'>
					<Link
						to='/login'
						onClick={() => console.log('login working')}>
						Login
					</Link>
					<Link
						to='/register'
						onClick={() => console.log('register working')}>
						Register
					</Link>
				</div>
			</div>
		</div>
		<Switch>
			{/*
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route component={PageNotFound}/>
        */}
        </Switch>
        <App />
	</Router>
)

ReactDOM.render(landing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
