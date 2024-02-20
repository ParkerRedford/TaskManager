import React, { Component, useCallback, useState } from "react";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }
  
  render() {
    if (this.props.numberOfDay !== this.props.selectedDay) {
      return (
        <div key={this.props.numberOfDay}>
          <h1 className="day" onClick={() => this.props.changeDay(this.props.numberOfDay)}>{this.props.numberOfDay}</h1>
        </div>
      );
    } else {
      return (
        <div key={this.props.numberOfDay}>
          <h1 className="day" style={{ backgroundColor: "red" }}>{this.props.numberOfDay}</h1>
        </div>
      );
    }
  }
}

export default Day;