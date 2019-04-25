import React, { Component } from "react";

const Hobby = props => {
  return (
    <div>
      <p>{props.hobby.first}</p>
      <p>{props.hobby.second}</p>
    </div>
  );
};
export default Hobby;
