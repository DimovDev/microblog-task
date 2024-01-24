import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import API from "../API";

function Logout() {
	const { authed, setAuth } = useAuth();

	useEffect(() => {
		API.post('/logout')
			.then(() => setAuth())
			.catch(e => setAuth());
		setAuth()
		localStorage.clear();
	}, [setAuth]);

	if (!authed) {
		return <Redirect to="/" />;
	}

	return null;
}

export default Logout;
