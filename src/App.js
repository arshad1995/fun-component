import React, { Component } from "react";
import Inform from "./Inform";
import Sub from "./operat";
import { a } from "./operat";
import { ipl } from "./operat";
import Todo from "./components/Todo";
import Text from "./components/Text";

console.log(ipl.team1);
let name = "taj";
class App extends Component {
  render() {
    // let { team1, team2, team3, team4 } = ipl;
    return (
      <div>
        {/* {team1}
        {a.map(val => {
          return <p>{val.name}</p>;
        })}
        <p>{a}</p>
        {Sub(1, 1, 2, 1)}
        <Inform firstName={"arshad"} lastName={"basha"} /> */}
        <Text />
      </div>
    );
  }
}
export default App;
