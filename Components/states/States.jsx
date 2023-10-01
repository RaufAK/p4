import React from 'react';
import './States.css';

class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.states', window.models.states);
    this.state = {
      search: ''
    };
  }

  // Function to filter states based on the search substring
  filterStates() {
    const { search } = this.state;
    const states = window.models.states || [];

    if (search === '') {
      return states; // Return all states when the search is empty
    }

    // Filter states that contain the search substring (case-insensitive)
    return states.filter((state) =>
        state.toLowerCase().includes(search.toLowerCase())
    );
  }

  render() {
    const filteredStates = states.filter((state) =>
        state.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
          <input
              type="text"
              placeholder="Enter a state"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
          />

          {/* Display the substring used for filtering */}
          {this.state.search && (
              <div>Filtering by: {this.state.search}</div>
          )}

          <ul>
            {filteredStates.length === 0 ? (
                <div>No matching states found.</div>
            ) : (
                // Display the matching states in alphabetical order
                filteredStates.map((state, index) => (
                    <li key={index}>{state}</li>
                ))
            )}
          </ul>
        </div>
    );
  }
}

export default States;
