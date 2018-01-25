import React, {Component} from 'react';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';

class LoginForm extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      loading: false
  };

  onButtonPress() {
    this.setState({loading: true});
    this.setState({error: ''});
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail () {
    this.setState({
      loading: false,
      error: 'authentication Failed'
    })
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading)
    {
      return <Spinner size = "small"/>;
    }

    return (
      <Button onPress = {this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

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

        <Text style = {styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
