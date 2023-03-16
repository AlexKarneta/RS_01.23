import "./textArea.css";
import { Component } from "react";

export default class TextArea extends Component {
  render() {
    const {
      name,
      label,
      rows,
      isInValid,
      errorMessage,
      value,
      onChange,
      onKeyUp,
    } = this.props;
    return (
      <label>
        <p>{label}</p>
        <textarea
          name={name}
          type="text"
          className="text-area"
          placeholder={label}
          rows={rows}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <p>{value.length}</p>
        <p>{isInValid && errorMessage}</p>
      </label>
    );
  }
}
