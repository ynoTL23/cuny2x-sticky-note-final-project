import React from 'react'
import './css/App.css'
import StickyNote from './StickyNote'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.trackMouseMove = this.trackMouseMove.bind(this)
		this.state = {
			mouseX: 0,
			mouseY: 0,
			notes: []
		}
	}

	callAPI = async () => {
		const res = await fetch('https://fast-stream-52898.herokuapp.com/notes/')
		if(res.status === 200) {
			const data = await res.json()
			return data
		} else {
			throw new Error('Error, something went wrong')
		}
	}

	componentDidMount() {
		this.callAPI()
			.then(data => {
				data.forEach(record => {
					// create the sticky note
					const note =
						<StickyNote
							id={record['uuid']}
							author={record['username']}
							posX={Math.floor(Math.random() * 1500)}
							posY={Math.floor(Math.random() * 900)}
							bgColor='#f1fa8c'
							content={record['posts']}
							voteCount={Math.floor(Math.random() * 100)}
						/>
					this.state.notes.push(note)
				})
			})
			.catch(err => {
				console.log(err)
		})
	}

	// track position of cursor
	trackMouseMove(e) {
		this.setState({ mouseX: e.screenX, mouseY: e.screenY })
	}

	createNote = e => {
		// only create new sticky if left click
		if (e.button === 0) {
			// don't create new sticky if clicking inside existing note
			const element = e.target.className
			if (
				element !== 'input-area' &&
				!element.includes('sticky-note') &&
				!element.includes('color-picker-container') &&
				!element.includes('color-option') &&
				!element.includes('color-palette') &&
				!element.includes('likes') &&
				!element.includes('delete-container')
			) {
				// create the sticky note
				const note = (
					<StickyNote
						posX={this.state.mouseX}
						posY={this.state.mouseY}
						bgColor='#f1fa8c'
						voteCount={0}
					/>
				)
				this.state.notes.push(note)
			}
		}
	}

	render() {
		return (
			<div className='canvas' onMouseMove={this.trackMouseMove} onMouseDown={this.createNote}>
				{/* render all notes */}
				{this.state.notes.map(note => note)}
				<p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
			</div>
		)
	}
}
