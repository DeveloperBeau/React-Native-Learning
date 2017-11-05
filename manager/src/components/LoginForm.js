/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return {
    email,
    password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
