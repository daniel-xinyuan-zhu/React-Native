import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key = "root" hideNavBar>
        <Scene key = "auth">
          <Scene key ="login" component={LoginForm} title = "Log In Here"/>
        </Scene>
        <Scene key = "main">
          <Scene
          rightTitle = "Add"
          key = "employees"
          onRight = {() => Actions.employeeCreate()}
          component={EmployeeList}
          title = "Employees"
          initial>
          </Scene>
        </Scene>
        <Scene key = "employeeCreate" component = {EmployeeCreate} title = "Create Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
