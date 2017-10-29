/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        
        <CardSection>
          <Input
            SecureTextEntry
            label="Password"
            placeholder="password"
           />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
