import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth } from './context/Auth';

function RootAuth({ children }) {
	const [initAuthTest, setAuthTest] = useState(false);
	const { setAuth } = useAuth();



	useEffect(() => {
		let authUser=localStorage.getItem('user')

		if (!initAuthTest) {
		// 	axios
		// 		.post('http://localhost:8080/ping')
		// 		.then(result => {
		// 			console.log(result.data)
		// 			if (result.status === 200) {
		// 				// setAuth(result.data.authData);
		// 				setAuth(localStorage.getItem('user'));
		// 			} else {
		// 				setAuth(null);
		// 			}
		// 		})
		// 		.catch(e => {
		// 			if (!axios.isCancel(e)) {
		// 				setAuth(null);
		// 			}
		// 		})
		// 		.finally(() => {
		// 			setAuthTest(true);
		// 		});
			setAuth(localStorage.getItem('user'));
			setAuthTest(true);
		}
	}, [initAuthTest, setAuth]);
	// useEffect(() => {
	// 	const loggedInUser = localStorage.getItem("user");
	// 	if (loggedInUser) {
	// 		const foundUser = JSON.parse(loggedInUser);
	// 		setAuth(loggedInUser);
	// 	}
	// 	// setAuthTest(true);
	// }, []);
	return <>{initAuthTest ? children : null}</>;
}

RootAuth.propTypes = {
	children: PropTypes.array,
};

RootAuth.defaultProps = {
	children: [],
};

export default RootAuth;
