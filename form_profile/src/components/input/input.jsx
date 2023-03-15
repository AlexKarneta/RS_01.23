import "./input.css";
import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  // commitInput=e=>{
  // 	this.setState({
  // 		text:e.target.value
  // 	})
  // }
  render() {
    // const {text}=this.state
    // console.log(text)
    const { label, name, type, onChange, value, isInValid, errorMessage } =
      this.props;
    // console.log(type)
    return (
      <label>
        <p>{label}</p>
        <input
          name={name}
          type={type}
          className="input"
          placeholder={label}
          value={value}
          onChange={onChange}
        />
        <p>{isInValid && errorMessage}</p>
      </label>
    );
  }
}
