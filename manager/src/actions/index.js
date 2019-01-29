import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => async (dispatch) => {
	dispatch({ type: LOGIN_USER });

	try {
		const user = await firebase.auth().signInWithEmailAndPassword(email, password);
		loginUserSuccess(dispatch, user);
	}
	catch (error) {
		try {
			const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
			loginUserSuccess(dispatch, newUser);
		}
		catch (e) {
			loginUserFailed(dispatch);
		}
	};
};

const loginUserFailed = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};