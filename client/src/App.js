import React from 'react';
import './css/App.css';
import StickyNote from './StickyNote';


export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.trackMouseMove = this.trackMouseMove.bind(this)
		this.state = { mouseX: 0, mouseY: 0, notes: [] }
	}

	trackMouseMove(e) {
		this.setState({ mouseX: e.screenX, mouseY: e.screenY })
	}

	createNote = () => {
		this.state.notes.push(<StickyNote posX={this.state.mouseX} posY={this.state.mouseY} />)
		// console.log(this.state.notes)
	}

	render() {
		return (
			<div className='canvas' onMouseMove={this.trackMouseMove} onMouseDown={this.createNote}>
				{this.state.notes.map((note) => note)}
				<p>X: { this.state.mouseX } Y: { this.state.mouseY }</p>
			</div>
		)
	}
}
