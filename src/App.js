import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/Task";
import Calendar from "./Components/Calendar";
import "./Glass.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  search = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  clear = () => {
    this.setState({ searchInput: "" });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label for="search">Search</label>
          <input value={this.state.searchInput}
            id="search"
            type="text"
            onChange={(e) => this.search(e)}
          ></input>
          <input type="button" onClick={this.clear} value="X"></input>
        </form>

        <form>
          <label for="name">Task Name</label>
          <input id="name" type="text" value={this.state.searchInput}></input>

          <input type="submit"></input>
        </form>

        {/* <Task name="parker" priority={3}></Task>
        <Task name="andrew" priority={2}></Task>
        <Task name="parker" priority={3}></Task>
        <Task name="andrew" priority={2}></Task>
        <Task name="parker" priority={3}></Task>
        <Task name="andrew" priority={2}></Task> */}

        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
