const dataInput = [
  {
    label: "Имя",
    type: "text",
    id: 1,
    name: "name",
    errorMessage: "Name should contain letters",
  },
  {
    label: "Фамилия",
    type: "text",
    id: 2,
    name: "surname",
    errorMessage: "Surname should contain letters",
  },
  {
    label: "Номер телефона",
    type: "tel",
    id: 3,
    name: "phone",
    errorMessage: "number field",
  },
  {
    label: "Сайт",
    type: "text",
    id: 4,
    name: "site",
    errorMessage: "site should start with https:// letters",
  },
  {
    label: "Дата рождения",
    type: "date",
    id: 5,
    name: "birthday",
    errorMessage: "dd.mm.yyyy format",
  },
];
const dataAreas = [
  {
    name: "about",
    label: "О себе",
    rows: 7,
    id: 21,
    errorMessage: "max 600 symbols field || field should not be empty",
  },
  {
    name: "stack",
    label: "Стэк технологий",
    rows: 7,
    id: 22,
    errorMessage: "max 600 symbols field || field should not be empty",
  },
  {
    name: "project",
    label: "Описание последнего проекта",
    rows: 7,
    id: 23,
    errorMessage: "max 600 symbols field || field should not be empty",
  },
];
const INITIAL_STATES = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  about: "",
  site: "",
  stack: "",
  project: "",
  errors: [],
};
export default dataInput;
export { dataAreas };
export { INITIAL_STATES };
