const validationScheme = {
  name: (value) => /^[a-zA-Z0-9_-]{3,15}$/.test(value),
  surname: (value) => /^[a-zA-Z0-9_-]{3,15}$/.test(value),
  birthday: () => true,
  phone: () => 1 > 0,
  about: (value) => value.length < 600,
  site: (value) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value),
  stack: (value) => value.length < 600,
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
