import {useEffect, useState} from "react";
import {Container,Button, Form} from "react-bootstrap";
import API from "../API";


const AddAdmin=()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setIsError] = useState('');
    const [message, setMessage] = useState('');

    function CreateAdmin() {

        API.post('users/create', {
           name,email,password,confirmPassword
        }).then(result => {
                if (result.status === 200) {
                    if (result.data.error === 0 && result.data) {
                        setMessage(result.data.message)

                    } else {
                        setMessage(result.data.message)
                        setIsError(error);
                    }
                } else {
                    setIsError(error);
                }
            })
            .catch(e => {
                setIsError(error);
            });
    }
        useEffect(() => {

        },[message])
    setTimeout(() => {
        setMessage(false)
    }, 5000)

    return (
        <>
        <Container className="pt-5">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                </Form.Group>
                <Button variant="primary"  onClick={() => CreateAdmin()}>
                    Submit
                </Button>
            </Form>
        </Container>
            {message &&   <p className="text-danger text-center text-capitalize">{message}</p>}
        </>
    )
}
export default AddAdmin
