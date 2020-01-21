import React from 'react'

import StickyNote from './StickyNote'

import './css/App.css'

export default class MouseTracker extends React.Component {
	constructor(props) {
		super(props)
		this.trackMouseMove = this.trackMouseMove.bind(this)
		this.state = { mouseX: 0, mouseY: 0 }
	}

	trackMouseMove = e => {
		this.setState({
			mouseX: e.clientX,
			mouseY: e.clientY
		})
	}

	render() {
		return (
			<div className='canvas' onClick={this.trackMouseMove}>
				<StickyNote position={this.state} />
				<p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
			</div>
		)
	}
}
