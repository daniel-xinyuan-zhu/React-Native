import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key = "root">
        <Scene key = "auth">
          <Scene key ="login" component={LoginForm} title = "Log In Here"/>
        </Scene>
        <Scene key = "main">
          <Scene key = "employees" component={EmployeeList}/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
