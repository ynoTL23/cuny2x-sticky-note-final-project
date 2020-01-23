import React from 'react'
import ReactDOM from 'react-dom'

import './css/Register.css'

const submitHandler = () => {
	// insert api call to register user

    console.log('registration test success');
    window.location.reload()
}

export const Register = () => {
	const form = (
        <div className='form'>
            <h2>Sign Up</h2>
			<label id='username-label'>Username</label>
			<input type='text' id='username' required />
			<br />

			<label id='password-label'>Password</label>
			<input type='password' id='password' required />
			<br />

			<div id='submit-btn' onClick={submitHandler}>Submit</div>
		</div>
    )

    ReactDOM.render(form, document.getElementById('root'))
}
