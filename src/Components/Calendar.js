import React, { Component, useState } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        month: -1,
        date: new Date(),
        days: []
    };
  }

getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  componentDidMount() {
    const today = new Date();
    const d =this.getDaysInMonth(today.getFullYear(), today.getMonth());
    this.setState({ date: today, days: new Array(d).fill((e, i) => i) });
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
          {this.state.days.map((e, i) => {
            if(i !== this.state.date.getDate() - 1) {
              return <h1 className="day">{i + 1}</h1>
          } else {
              return <h1 className="day" style={{backgroundColor: "red"}}>{i + 1}</h1>
          }
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;