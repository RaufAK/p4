import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
    this.state = {
      search: ''
    };
  }

  render() {
    const states = window.models.states || []
    //const filteredStates = states.filter((state) => state.includes(this.state.search))
    return (
      <div>
        <input
            type={"text"}
            placeholder={"Enter a state"}
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
        />
      </div>
    );
  }
}

export default States;
