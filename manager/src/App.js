import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View, Text} from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentWillMount(){
    var config = {
        apiKey: 'AIzaSyCAB8uqDTRfRV15dT4wpv2p811xGRQuX7s',
        authDomain: 'manager-901f7.firebaseapp.com',
        databaseURL: 'https://manager-901f7.firebaseio.com',
        projectId: 'manager-901f7',
        storageBucket: '',
        messagingSenderId: '528804105133'
      };
    firebase.initializeApp(config);
  }
  render () {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
