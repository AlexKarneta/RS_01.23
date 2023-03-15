import './textArea.css'
import { Component } from 'react'

export default class TextArea extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<label >
			<p>{this.props.name}</p>
			<textarea
				type="text"
				className="text-area"
				placeholder="area"
				rows='7'				
			/> 
			</label>
			
		)
	}	
}
