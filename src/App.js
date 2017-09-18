import React, { Component } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay';
import {getPoll, addRating} from './mockCalls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: null,
      current: null
    }
  }

  componentWillMount() {
    // pollID = 1 is arbitrary here.  Future iterations would need to determine
    // when to switch between polls.
    let poll = getPoll(1);
    this.setState({poll});
    this.setState({current: 0});
  }

  handleClick = (entryID, rating) => {
    addRating(entryID, rating);
    // Increase current index by 1
    let current = this.state.current + 1
    // Check to see if current is larger than the last index of the poll list
    // If current is past the end, set to -1, otherwise use the current value
    current = current >= this.state.poll.length ? -1 : current
    this.setState({current});
  }

  restart = () => {this.setState({current: 0})};

  render() {
    // Check whether we are at the end of the poll.
    // If yes, show the end screen
    // If no, show the next image
    let endScreen = (
      <div>
        <div>Thank you for ranking!</div>
        <button onClick={this.restart}>Restart Poll</button>
      </div>
    )
    let imageScreen = (
      <ImageDisplay
        image={this.state.poll[this.state.current]}
        handleClick={this.handleClick}
      />
    )

    let display = this.state.current === -1 ? endScreen : imageScreen;
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
