import {Button, Container, Form} from "react-bootstrap";
import API from "../API";
import {useEffect, useState} from "react";

const EditAdmin=(props)=> {
    const {id} = props.location.state

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setIsError] = useState('');
    const [message, setMessage] = useState('');

    function editAdmin() {
        API.post('/edit', {id}).then(result => {
                if (result.status === 200) {
                    if (result.data.error === 0 && result.data) {

                        console.log('result', result.data.user.name)
                        setName(result.data.user.name)
                        setEmail(result.data.user.email)

                    } else {

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
    function updateAdmin() {
        API.post('/update', {id,name,email,password,confirmPassword}).then(result => {
            if (result.status === 200) {
                if (result.data.error === 0 && result.data) {
                    setMessage(result.data.message)
                } else {
                    setIsError(result.data.error);
                    setMessage(result.data.message)
                }
            } else {
                setIsError(result.data.error);
            }
        })
            .catch(e => {
                setIsError(error);
            });
    }
    useEffect(() => {
        editAdmin()
    },[])
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
                    <Button variant="primary"  onClick={() => updateAdmin()}>
                        Submit
                    </Button>
                </Form>
            </Container>
            <p className="text-danger text-center text-capitalize">{message}</p>

        </>
    )
}
export default EditAdmin
