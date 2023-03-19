import { Component } from "react";
import "./form.css";
import Input from "../input/input";
import TextArea from "../textArea/TextArea";
import Button from "../buttons/buttons";
import dataInput from "../data/data";
import validate from "./form.utils";
import { dataAreas } from "../data/data";
import { INITIAL_STATES } from "../data/data";
import Modal from "../modal.js/modal";

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
    const { errors, active, setActive, ...states } = this.state;
    const errorsArray = validate(states);
    this.setState({
      errors: errorsArray,
    });

    if (errors.length) {
      console.log(states);
    }
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
  changeVal = (e) => {
    const { active, setActive, ...states } = this.state;
    this.setState({
      active: true,
      setActive: true,
    });
    console.log(states);
  };
  toggleActive = (e) => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    const inputs = dataInput.map((item) => {
      const { id, name, ...itemProps } = item;
      return (
        <Input
          key={id}
          {...itemProps}
          isInValid={this.state.errors.includes(name)}
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
        {/* <h1>Создание анкеты</h1> */}
        {inputs}
        {areas}
        <button type="submit">Submit</button>
        <button type="reset" onClick={this.onReset}>
          Reset
        </button>
        <button onClick={this.changeVal}>modalka</button>
        <Modal
          name={this.state.name}
          surname={this.state.surname}
          birthday={this.state.birthday}
          phone={this.state.phone}
          about={this.state.about}
          site={this.state.site}
          stack={this.state.stack}
          project={this.state.project}
          active={this.state.active}
          setActive={this.toggleActive}
        />
      </form>
    );
  }
}
export default Form;
