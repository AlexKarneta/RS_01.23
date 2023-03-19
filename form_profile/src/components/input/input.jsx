import "./input.css";

const Input = (props) => {
  const { label, name, type, onChange, value, isInValid, errorMessage } = props;

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
};
export default Input;
