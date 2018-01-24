import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
      email: '',
      password: ''
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value = {this.state.email}
            onChangeText = {email => this.setState({email})}
            label = "Email"
            placeholder = "user@gmail.com"
            secureTextEntry = {false}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder = "password"
            label = "Password"
            value = {this.state.password}
            onChangeText = {password => this.setState({password})}
            secureTextEntry = {true}
          />
        </CardSection>

        <CardSection >
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
