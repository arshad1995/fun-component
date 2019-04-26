import React, { Component } from "react";
import "./Facebook.css";

class Facebook extends Component {
  state = {
    firstName: "",
    surName: "",
    number: "",
    password: ""
  };

  submit = () => {
    if (this.state.firstName !== "" && this.state.password !== "") {
      alert("enter name and password");
    }
    let person = {
      firstName: this.state.firstName,
      surName: this.state.surName,
      number: this.state.number,
      password: this.state.password
    };
    console.log(person);
  };

  render() {
    return (
      <div className="facebook">
        <input
          type="text"
          placeholder="First name"
          onChange={a => this.setState({ firstName: a.target.value })}
        />

        <input
          type="text"
          placeholder="surname"
          onChange={b => this.setState({ surName: b.target.value })}
        />
        <p>
          <input
            type="text"
            placeholder="Mobile number or email address"
            maxlength="10"
            onChange={c => this.setState({ number: c.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            onChange={d => this.setState({ password: d.target.value })}
          />
        </p>

        <div onClick={this.submit} className="submit">
          Sign up
        </div>
      </div>
    );
  }
}
export default Facebook;
