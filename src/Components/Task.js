import React, { Component, useState } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      priority: -1,
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.name, priority: this.props.priority });
  }

  render() {
    return (
      <div class="task">
        <label>Name</label>
        <p>{this.state.name}</p>
        <label>Priority</label>
        <p>{this.state.priority}</p>
        <p>Date</p>

        <input type="button" value='Delete'></input>

      </div>
    );
  }
}

export default Task;
