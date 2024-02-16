import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/Task";
import Calendar from "./Components/Calendar";
import "./Glass.css"

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <div className="nodays">
          <h3 className="tab" style={{backgroundColor: "green"}}>Calender</h3>
          <h3 className="tab">Tasks</h3>
        </div>

        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
