import React, { Component } from "react";
import "./Facebook.css";

class Facebook extends Component {
  state = {
    firstName: "",
    surName: "",
    number: "",
    password: "",
    submitted: false
  };

  submit = () => {
    if (this.state.firstName === "") {
      alert("please enter first name");
    } else if (this.state.surName === "") {
      alert("please enter sur name");
    } else if (this.state.number === "") {
      alert("please enter number");
    } else if (this.state.password === "") {
      alert("please enter password");
    } else {
      this.setState({ submitted: true });
      let person = {
        firstName: this.state.firstName,
        surName: this.state.surName,
        number: this.state.number,
        password: this.state.password
      };
      console.log(person);
    }
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
        {this.state.submitted && (
          <div>
            <p>{this.state.firstName}</p>
            <p>{this.state.surName}</p>
            <p>{this.state.number}</p>
            <p>{this.state.password}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Facebook;
