import React from 'react'
import Draggable from 'react-draggable'
import './css/StickyNote.css'

export default class StickyNote extends React.Component {
	render() {
        const X = this.props.posX
        const Y = this.props.posY
        console.log(X , Y)
		return (
			// <div
			// 	className='sticky-note'
			// 	style={{
			// 		position: 'absolute',
			// 		left: position.mouseX,
			//         top: position.mouseY,
			//         display: 'initial'
			//     }}>
			// </div>


			<Draggable bounds='.canvas' cancel='textarea' defaultPosition={{x: X, y: Y}}>
				<div className='sticky-note'>
					<div className='content'>
						<textarea
							className='inputarea'
                            placeholder='Enter note description here'>
                        </textarea>
					</div>
				</div>
			</Draggable>
		)
	}
}
