import React, { Component, useState } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        month: -1,
        date: new Date()
    };
  }

getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  componentDidMount() {
    const today = new Date();
    this.setState({ date: today });
  }

  render() {
    return (
      <div>
        <p>Year: {this.state.date.getFullYear()}</p>
        <p>Month: {this.state.date.getMonth() + 1}</p>
        <p>Days of Month: {this.getDaysInMonth(this.state.date.getFullYear(), this.state.date.getMonth())}</p>
        <p>Today's day: {this.state.date.getDate()}</p>
      </div>
    );
  }
}

export default Calendar;