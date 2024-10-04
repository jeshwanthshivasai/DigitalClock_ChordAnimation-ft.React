import React, { Component } from 'react';
import DateDisplay from './DateDisplay';
import TimeDisplay from './TimeDisplay';
import WeekdayDisplay from './WeekdayDisplay';
import Animation from './Animation';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock-container">
        <Animation />
        <TimeDisplay time={date.toLocaleTimeString()} />
        <DateDisplay date={date.toLocaleDateString()} />
        <WeekdayDisplay
          weekday={date.toLocaleDateString('en-US', { weekday: 'long' })}
        />
      </div>
    );
  }
}

export default Clock;
