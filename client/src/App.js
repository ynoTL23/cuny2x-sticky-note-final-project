import React from 'react';
import './css/App.css';
import StickyNote from './StickyNote';


export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.trackMouseMove = this.trackMouseMove.bind(this)
		this.state = { mouseX: 0, mouseY: 0, notes: [] }
	}

	// track position of cursor
	trackMouseMove(e) {
		this.setState({ mouseX: e.screenX, mouseY: e.screenY })
	}

	createNote = (e) => {
		// only create new sticky if left click
		if (e.button === 0) {
			// don't create new sticky if clicking inside existing note
			const element = e.target.className
			if ( (element !== 'input-area') && (!element.includes('sticky-note')) && (!element.includes('color-picker-container')) && (!element.includes('color-option')) && (!element.includes('color-palette')) ) {
				// create the sticky note
				this.state.notes.push(<StickyNote posX={this.state.mouseX} posY={this.state.mouseY} />)
			}
		}
	}

	render() {
		return (
			<div className='canvas' onMouseMove={this.trackMouseMove} onMouseDown={this.createNote}>
				{/* render all notes */}
				{this.state.notes.map((note) => note)}
				<p>X: { this.state.mouseX } Y: { this.state.mouseY }</p>
			</div>
		)
	}
}
