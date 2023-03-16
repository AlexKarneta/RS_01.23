import { Component } from "react";
import "./form.css";
import Input from "../input/input";
import TextArea from "../textArea/TextArea";
import DatePicker from "../datePicker/datePicker";
import Button from "../buttons/buttons";
import dataInput from "../data/data";
import validate from "./form.utils";
import { dataAreas } from "../data/data";
import { INITIAL_STATES } from "../data/data";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATES;
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { errors, ...states } = this.state;
    const errorsArray = validate(states);
    this.setState({
      errors: errorsArray,
    });
  };
  onKeyUp = (e) => {
    if (e.target.value.length > 10) {
      console.log(e.target.value.length);
      return e.target.value.length;
    }
  };
  onReset = (e) => {
    this.setState(INITIAL_STATES);
  };
  // idShow = (id) => {
  // 	console.log(id)
  // }

  render() {
    const inputs = dataInput.map((item) => {
      const { id, name, ...itemProps } = item;
      return (
        <Input
          key={id}
          {...itemProps}
          isInValid={this.state.errors.includes(name)}
          // onDelete={()=>this.idShow(id)}
          onChange={this.onValueChange}
          name={name}
          value={this.state[name]}
        />
      );
    });
    const areas = dataAreas.map((item) => {
      const { id, name, ...itemProps } = item;
      return (
        <TextArea
          key={id}
          onChange={this.onValueChange}
          name={name}
          {...itemProps}
          isInValid={this.state.errors.includes(name)}
          value={this.state[name]}
          onKeyUp={this.onKeyUp}
        />
      );
    });
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h1>Создание анкеты</h1>
        {inputs}
        {areas}
        {/* <TextArea name="about" onChange={this.onValueChange} />
        <TextArea name="stack" />
        <TextArea name="last project" /> */}
        <button type="submit">submit</button>
        <button type="reset" onClick={this.onReset}>
          reset
        </button>
      </form>
    );
  }
}
export default Form;
