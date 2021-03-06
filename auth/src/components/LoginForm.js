import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	};

	onButtonPress = async () => {
		const { email, password } = this.state;
		this.setState({ error: '', loading: true });

		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			this.onLoginSuccess();
		} catch (logError) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password);
				this.onLoginSuccess();
			} catch (createError) {
				this.onLoginFailed();
			}
		}
	};

	onLoginFailed = () => {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	};

	onLoginSuccess = () => {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	};

	renderButton = () => {
		if (this.state.loading) return <Spinner size='small' />;
		
		return (
			<Button onPress={this.onButtonPress}>
				Log In
			</Button>
		);
	};

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label='Email'
						placeholder='user@gmail.com'
						value={this.state.email}
						onChangeText={(email) => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label='Password'
						placeholder='password'
						value={this.state.password}
						onChangeText={(password) => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{ this.state.error }
				</Text>

				<CardSection>
					{ this.renderButton() }
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
