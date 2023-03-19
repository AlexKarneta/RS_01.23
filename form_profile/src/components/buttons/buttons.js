import { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, label } = this.props;
    return (
      <label>
        <button name={name}>{label}</button>
      </label>
    );
  }
}
