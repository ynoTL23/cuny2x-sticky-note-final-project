import React from 'react';
import './css/App.css';


export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { x: 0, y: 0 }
	}

	onMouseClick(e) {
		this.setState({ x: e.screenX, y: e.screenY })
	}

	render() {
		const { x, y } = this.state

		return (
			<div className='canvas' onMouseDown={this.onMouseClick.bind(this)}>
				<p>X: { x } Y: { y }</p>
			</div>
		)
	}
}
