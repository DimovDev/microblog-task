import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/Auth';

function Logout() {
	const { authed, setAuth } = useAuth();

	useEffect(() => {
		// axios
		// 	.post('/logout')
		// 	.then(() => setAuth())
		// 	.catch(e => setAuth());
		setAuth()
		localStorage.clear();
	}, [setAuth]);

	if (!authed) {
		return <Redirect to="/" />;
	}

	return null;
}

export default Logout;
