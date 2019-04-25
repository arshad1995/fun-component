import React, { Component } from "react";
import Hobby from "./brf";
const Inform = props => {
  return (
    <div>
      <p>Name: {props.firstName}</p>
      <p>Last: {props.lastName}</p>
      <Hobby hobby={{ first: "cricket", second: "hockey" }} />
    </div>
  );
};
export default Inform;
