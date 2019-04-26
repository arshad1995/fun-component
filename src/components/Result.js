import React from "react";
import "../styles/Result.css";

const Result = props => {
  return (
    <div>
      <p>{props.name}</p>
      {/* <p>{props.pass}</p> */}
    </div>
  );
};

export default Result;
