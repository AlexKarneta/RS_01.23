import './datePicker.css'
import { Component } from 'react'

export default class DatePicker extends Component {
	render(){
		return (
			<label >
				<p>{this.props.name}</p>
				<input
				type="date"
				value="2018-07-22"
			/> 
			</label>
		)
	}	
}