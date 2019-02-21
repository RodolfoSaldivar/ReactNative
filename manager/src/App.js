import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyDdkT78aD3ICKzARJY_8pObafNs_pVyvFo',
			authDomain: 'manager-5b98b.firebaseapp.com',
			databaseURL: 'https://manager-5b98b.firebaseio.com',
			projectId: 'manager-5b98b',
			storageBucket: 'manager-5b98b.appspot.com',
			messagingSenderId: '702690418575'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
