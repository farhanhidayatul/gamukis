import React from 'react';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: ''
    };
  }

  handleChange = (event) => {
    const email = event.target.value;
    this.setState({ email }, () => {
      this.validateEmail();
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = '';

    if (!emailPattern.test(email)) {
      errorMessage = 'Email is not valid';
    }

    this.setState({ errorMessage });
  };

  render() {
    return (
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter your email"
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
        {this.state.errorMessage && (
          <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default EmailInput;
