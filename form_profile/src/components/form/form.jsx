import { Component } from "react";
import "./form.css";
import Input from "../input/input";
import TextArea from "../textArea/textArea";
import DatePicker from "../datePicker/datePicker";
import Button from "../buttons/buttons";
import data from "../data/data";
import validate from "./form.utils";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      birthday: "",
      phone: "",
      about: "",
      site: "",
      stack: "",
      errors: [],
    };
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
    console.log("fields are incorrect: " + errorsArray);
  };
  onReset = (e) => {
    this.setState({
      name: "",
      surname: "",
      birthday: "",
      phone: "",
      about: "",
      site: "",
      stack: "",
      errors: [],
    });
  };
  // idShow = (id) => {
  // 	console.log(id)
  // }

  render() {
    const inputs = data.map((item) => {
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
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h1>Создание анкеты</h1>
        {/* <input
						placeholder='salary'
							name='salary'
							type='number'
							onChange={this.onValueChange}
							value={this.state.salary}
						/>	 */}
        {/* <Input
						{...this.state.testData[1]}
						onDelete={this.idShow}
						/> */}
        {inputs}
        <TextArea name="about" onChange={this.onValueChange} />
        <TextArea name="stack" />
        <TextArea name="last project" />
        <button type="submit">submit</button>
        <button type="reset" onClick={this.onReset}>
          reset
        </button>
      </form>
    );
  }
}
export default Form;
