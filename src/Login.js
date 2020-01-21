import React from 'react'
import ReactDOM from 'react-dom'

import { Register } from './Register'

import './css/Login.css'

const submitHandler = () => {
    console.log('login test success');
    window.location.reload()
}

export const Login = () => {
	const form = (
		<div className='form'>
			<h2>Login</h2>
			<label id='username-label'>Username</label>
			<input type='text' id='username' required />
			<br />

			<label id='password-label'>Password</label>
			<input type='password' id='password' required />
			<br />

			<div id='submit-btn' onClick={submitHandler}>Log in</div>

			<p onClick={Register}>New here? Create an account</p>
		</div>
	)

    ReactDOM.render(form, document.getElementById('root'))
}
