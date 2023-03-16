const validationScheme = {
  name: (value) => /^[a-zA-Z0-9_-]{3,15}$/.test(value),
  surname: (value) => /^[a-zA-Z0-9_-]{3,15}$/.test(value),
  birthday: (value) =>
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
      value
    ),
  phone: (value) =>
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value) &&
    value.length <= 12,
  about: (value) => value.length < 600 && value.length,
  site: (value) => /^https?:\/\/(.*)/.test(value),
  stack: (value) => value.length < 600 && value.length,
  project: (value) => value.length < 600 && value.length,
};
function validate(states) {
  const keys = Object.keys(states);
  let invalidArr = [];
  for (let key of keys) {
    const isValid = validationScheme[key](states[key]);
    if (!isValid) {
      invalidArr.push(key);
    }
  }
  return invalidArr;
}

export default validate;
