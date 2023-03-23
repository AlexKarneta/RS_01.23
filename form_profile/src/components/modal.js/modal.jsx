import { Component } from "react";
import "./modal.css";

export default class Modal extends Component {
  render() {
    const {
      name,
      surname,
      birthday,
      phone,
      about,
      site,
      stack,
      project,
      active,
      setActive,
    } = this.props;
    return (
      <div className={active ? "modal active" : "modal"} onClick={setActive}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          {name ? "name: " + name : ""}
          <br />
          {surname ? "surname: " + surname : ""}
          <br />
          {birthday ? "birthday: " + birthday : ""}
          <br />
          {phone ? "phone: " + phone : ""}
          <br />
          {about ? "about" + about : ""}
          <br />
          {site ? "site" + site : ""}
          <br />
          {stack ? "stack" + stack : ""}
          <br />
          {project ? "project" + project : ""}
        </div>
      </div>
    );
  }
}
