import React from 'react'
import './css/StickyNote.css'

export default class StickyNote extends React.Component {
    render() {
        const position = this.props.position

        return (
			<div
				className='sticky-note'
				style={{
					position: 'absolute',
					left: position.mouseX,
                    top: position.mouseY,
                    display: 'initial'
                }}>
            </div>
		)
    }

}
