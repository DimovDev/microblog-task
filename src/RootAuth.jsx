import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './context/Auth';

function RootAuth({ children }) {
	const [initAuthTest, setAuthTest] = useState(false);
	const { setAuth } = useAuth();


	useEffect(() => {
		let authUser=localStorage.getItem('user')


		if (!initAuthTest) {

			setAuth(localStorage.getItem('user'));
			setAuthTest(true);
		}
	}, [initAuthTest, setAuth]);

	return <>{initAuthTest ? children : null}</>;
}

RootAuth.propTypes = {
	children: PropTypes.array,
};

RootAuth.defaultProps = {
	children: [],
};

export default RootAuth;
