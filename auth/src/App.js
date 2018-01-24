import React, {Component } from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDNMEKGJKbxNbwYY5qXxxcFAGIOMHWrDNY',
        authDomain: 'authentication-1c025.firebaseapp.com',
        databaseURL: 'https://authentication-1c025.firebaseio.com',
        projectId: 'authentication-1c025',
        storageBucket: 'authentication-1c025.appspot.com',
        messagingSenderId: '458557683857'
    });
  }
  render() {
    return(
      <View>
        <Header headerText = "Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
