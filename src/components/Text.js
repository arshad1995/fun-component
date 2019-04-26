import React, { Component } from "react";
import Result from "./Result";

class Text extends Component {
  state = {
    text1: [""],
    enter: "",
    name: ""
  };
  typeName = a => {
    this.setState({ enter: a.target.value });
    console.log(a.target.value);
  };
  pass = e => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };
  typeSubmit = () => {
    let texts = this.state.text1;
    texts.push(this.state.enter);
    this.setState({ text1: texts });
  };

  render() {
    return (
      <div>
        <p>
          <input type="text" onChange={this.typeName} />
        </p>
        <p>
          <input type="password" onchange={this.pass} />
        </p>
        <p>
          <input type="submit" onClick={this.typeSubmit} />
        </p>
        {this.state.text1.map(text1 => (
          <Result name={text1} />
        ))}
        {/* {this.state.text1.map(text1 => (
          <Result pass={text1} />
        ))} */}
      </div>
    );
  }
}
export default Text;
