import React from 'react';
import './css/App.css';


export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.trackMouseMove = this.trackMouseMove.bind(this)
		this.state = { x: 0, y: 0 }
	}

	trackMouseMove(e) {
		this.setState({ x: e.screenX, y: e.screenY })
	}

	render() {
		const { x, y } = this.state

		return (
			<div className='canvas' onMouseMove={this.trackMouseMove.bind(this)}>
				<p>X: { x } Y: { y }</p>
			</div>
		)
	}
}
