import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {
		loggedIn: null 
	}

	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAEozpbVFph434yOcjErpTTJvE-Z-aXpsw',
			authDomain: 'auth-ba54b.firebaseapp.com',
			databaseURL: 'https://auth-ba54b.firebaseio.com',
			projectId: 'auth-ba54b',
			storageBucket: 'auth-ba54b.appspot.com',
			messagingSenderId: '885656699610'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent = () => {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log Out
							</Button>
						</CardSection>
					</Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;

		}
	};

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{ this.renderContent() }
			</View>
		);
	}
}

export default App;
