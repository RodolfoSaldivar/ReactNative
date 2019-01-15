import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAJwPE66Bzb_IcMV7evvLuZ6Um7A1O78e4',
			authDomain: 'auth-94cd6.firebaseapp.com',
			databaseURL: 'https://auth-94cd6.firebaseio.com',
			projectId: 'auth-94cd6',
			storageBucket: 'auth-94cd6.appspot.com',
			messagingSenderId: '896812391009'
		});
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				<LoginForm />
			</View>
		);
	}
}

export default App;
