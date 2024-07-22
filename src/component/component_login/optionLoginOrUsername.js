import React from 'react';

class UsernameOrEmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputType: 'username', // Default type is username
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    let type = 'username';

    // Simple regex to check if the input is an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(value)) {
      type = 'email';
    }

    this.setState({ inputValue: value, inputType: type });
  };

  render() {
    return (
      <div>
        <label htmlFor="usernameOrEmail">Username atau Email</label>
        <input
          type="text"
          id="usernameOrEmail"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Enter your username or email"
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
        <p>Input Type: {this.state.inputType}</p>
      </div>
    );
  }
}

export default UsernameOrEmailInput;
