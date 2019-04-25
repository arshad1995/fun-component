// import React, { Component } from "react";
// import Result from "./Result";

// class Todo extends Component {
//   state = {
//     todos: [],
//     task: ""
//   };

//   setTask = e => {
//     //console.log(e.target.value);
//     this.setState({ task: e.target.value });
//   };
//   addTask = () => {
//     let todos = this.state.todos;

//     todos.push(this.state.task);
//     this.setState({ todos: todos });
//     console.log(todos);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Todo</h1>
//         <input type="text" onChange={this.setTask} />
//         <input type="submit" onClick={this.addTask} />
//         <p>
//           {this.state.todos.map(todo => (
//             <Result name={todo} />
//           ))}
//         </p>
//       </div>
//     );
//   }
// }
// export default Todo;
