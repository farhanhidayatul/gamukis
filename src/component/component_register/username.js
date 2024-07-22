import React from 'react';

class UsernameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Enter your username"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        />
      </div>
    );
  }
}

export default UsernameInput;
