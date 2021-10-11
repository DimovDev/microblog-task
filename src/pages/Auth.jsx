import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Delay from 'react-delay';
import { useAuth } from '../context/Auth';

function Auth(props) {
	const { authData, setAuth } = useAuth();
	useEffect(() => {

		try {
		setAuth(localStorage.getItem('user'));
		}catch (e) {
			setAuth(null);
		}
	}, [setAuth]);

	const referer = props?.location?.state?.referer || '/';

	if (authData) {
		return <Redirect to={referer.pathname} />;
	}

	if (authData === null) {
		return <Redirect to={{ pathname: '/login', state: { referer } }} />;
	}

	return (
		<Delay wait={2000}>
			<h1>Logging in...</h1>
		</Delay>
	);
}

export default Auth;
