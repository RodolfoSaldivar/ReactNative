import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

class RouterComponent extends Component {
	render() {
		return (
			<Router>
				<Scene key='root'>
					<Scene key='login' component={LoginForm} title='Please login' initial />
					<Scene key='employeeList' component={EmployeeList} title='Employees' />
				</Scene>
			</Router>
		);
	}
}

export default RouterComponent;
