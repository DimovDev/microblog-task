import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import API from "../API";
import {Container,Form,Button} from "react-bootstrap";

function Login(props) {
	const [isError, setIsError] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const { authData, setAuth } = useAuth();



	const referer = props?.location?.state?.referer || '/';

	function login() {
	API.post('/login', {
				email,
				password,
			})
			.then(result => {
				if (result.status === 200) {
					if (result.data.error === 0 && result.data.authData) {
						setAuth(result.data.authData);
						let user=result.data.authData
						localStorage.setItem('user', user)
						setMessage(result.data.authData.message)
					} else {
						setMessage(result.data.message)
						setIsError(true);
					}
				} else {
					setIsError(true);
				}
			})
			.catch(e => {
				setIsError(true);
			});
	}





	if (authData) {
		return <Redirect to={referer} />;
	}

	return (
<>
		<Container className="pt-5 ">
			<Form className="col-6 ">

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control  type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
				</Form.Group>

				<Button variant="primary"  onClick={login}>
					Log in
				</Button>
			</Form>
		</Container>
	{message &&   <p className="text-danger text-center text-capitalize">{message}</p>}
</>
	);
}

export default Login;
