import React from 'react'
import Draggable from 'react-draggable'
import './css/StickyNote.css'

export default class StickyNote extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			id: props.id,
			author: 'Anonymous',
			bgColor: props.bgColor,
			content: props.content,
			voteCount: props.voteCount,
			voted: false
		}
		this.deleteNote = this.deleteNote.bind(this)
		this.voteHandler = this.voteHandler.bind(this)
	}

	// change the sticky note color
	changeColor = (e, color) => {
		const colorPickerCircle = e.target.closest('.color-picker-container') // track the color picker circle
		this.setState( {bgColor: color} ) // change the bg color of sticky note
		colorPickerCircle.style.backgroundColor = color // change color picker circle indicator
	}

	// delete the note
	deleteNote(e) {
		e.target.closest('.sticky-note').style.display = 'none'
	}

	// note was voted on
	voteHandler(e) {
		const status = this.state.voted
		if(status) {
			this.setState({voteCount: this.state.voteCount - 1})
			this.setState({voted: false})
			e.target.style.color = '#000'
		} else {
			this.setState({voteCount: this.state.voteCount + 1})
			this.setState({voted: true})
			e.target.style.color = 'red'
		}
	}

	render() {
		return (
			<Draggable
				bounds='.canvas'
				cancel='textarea'
				defaultPosition={{ x: this.props.posX, y: this.props.posY }}>
				<div className='sticky-note' style={{backgroundColor: this.state.bgColor}}>
					<div className='content'>
						<textarea
							className='input-area'
							placeholder='Enter note description here'
							defaultValue={this.state.content}></textarea>
					</div>
					<div className="color-picker-container" style={{backgroundColor: this.state.bgColor}}>
						<div className="color-palette">
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#ffa0a0')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#bd93f9')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#f1fa8c')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#50fa7b')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#8be9fd')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#d8dee9')}></span>
						</div>
					</div>
					<div className="likes" onClick={(e) => this.voteHandler(e)}>{this.state.voteCount} ❤</div>
					<div className="delete-container" onClick={(e) => this.deleteNote(e)}>X</div>
				</div>
			</Draggable>
		)
	}
}
