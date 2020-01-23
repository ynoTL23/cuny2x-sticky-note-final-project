import React from 'react'
import Draggable from 'react-draggable'
import './css/StickyNote.css'

export default class StickyNote extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			bgColor: '#f1fa8c'
		}
	}

	// change the sticky note color
	changeColor = (e, color) => {
		const colorPickerCircle = e.target.closest('.color-picker-container') // track the color picker circle
		this.setState( {bgColor: color} ) // change the bg color of sticky note
		colorPickerCircle.style.backgroundColor = color // change color picker circle indicator
		document.querySelector('.color-palette .current').classList.remove('current') // remove current indicator in color palette
		e.target.classList.add('current') // update color palette indicator
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
							placeholder='Enter note description here'></textarea>
					</div>
					<div className="color-picker-container" style={{backgroundColor: this.state.bgColor}}>
						<div className="color-palette" >
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#ff5555')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#bd93f9')}></span>
							<span className='color-option current' onMouseDown={(e) => this.changeColor(e, '#f1fa8c')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#50fa7b')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#8be9fd')}></span>
							<span className='color-option' onMouseDown={(e) => this.changeColor(e, '#d8dee9')}></span>
						</div>
					</div>
				</div>
			</Draggable>
		)
	}
}
