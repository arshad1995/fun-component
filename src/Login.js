import React, { Component } from "react";
import Result from "./components/Result";
import "./Log.css";

class Login extends Component {
  state = {
    userName: "",

    email: ""
  };
  //   userName = a => {
  //     console.log(a.target.value);
  //     this.setState({ userName: a.target.value });
  //   };
  //   email = e => {
  //     this.setState({ email: e.target.value });
  //   };
  submit = () => {
    alert("Welcome" + " " + this.state.userName + " " + this.state.email);
  };

  render() {
    return (
      <div className="log">
        <h2 className="f">Form</h2>
        <p>
          <input
            type="text"
            onChange={e => this.setState({ userName: e.target.value })}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={a => this.setState({ email: a.target.value })}
            placeholder="email"
          />
        </p>
        <p>
          <input type="submit" onClick={this.submit} className="button" />
        </p>
        {/* <Result name={"arshad"} /> */}
      </div>
    );
  }
}

export default Login;

// arrayname.map(number => number)
