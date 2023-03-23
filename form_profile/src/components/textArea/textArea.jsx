import "./textArea.css";

const TextArea = (props) => {
  const {
    name,
    label,
    rows,
    isInValid,
    errorMessage,
    value,
    onChange,
    onKeyUp,
  } = props;
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
      <p>{value.length > 477 ? 600 - value.length + " symbols left" : ""}</p>
      <p>{isInValid && errorMessage}</p>
    </label>
  );
};
export default TextArea;
