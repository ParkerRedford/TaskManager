import React, { Component, useCallback, useState } from "react";
import Day from "./Day";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        month: -1,
        date: new Date(),
        days: [],
        selectedDay: -1
    };
  }

getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  componentDidMount() {
    const today = new Date();
    const d = this.getDaysInMonth(today.getFullYear(), today.getMonth());
    this.setState({ date: today, days: new Array(d).fill((e, i) => i), selectedDay: today.getDate() });
  }

  selectDay = (index, event) => {
    this.setState({selectDay: index + 1});
  }

  changeDay = (i) => {
    this.setState({selectedDay: i});
  }

  render() {
    return (
      <div>
        <div className="nodays">
          <h1 className="tab mButton">&larr;</h1>
          <h1 className="tab mButton">&rarr;</h1>
        </div>

        <p>Year: {this.state.date.getFullYear()}</p>
        <p>Month: {this.state.date.getMonth() + 1}</p>
        <p>Today's day: {this.state.date.getDate()}</p>

        <div className="days">
          {this.state.days.map((item, index) => {
            return <Day numberOfDay={index} key={index} changeDay={this.changeDay} selectedDay={this.state.selectedDay}></Day>
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;