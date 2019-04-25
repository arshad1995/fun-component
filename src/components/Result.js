import React from "react";
import "../styles/Result.css";

const Result = props => {
  return (
    <div className="back">
      <p>{props.name}</p>
    </div>
  );
};

export default Result;
