import React, {useEffect, useState} from 'react';
import {Container, Table, Button} from "react-bootstrap";
import API from "../API"


import {withRouter, Link, Redirect,} from "react-router-dom";


function Users({props}) {
    const [isError, setIsError] = useState(false);
    let [users, setUsers] = useState(false);
    const [message, setMessage] = useState(false)
    const [id, setId] = useState(false)
    useEffect(() => {
        API.post('users/users')
            .then(result => {
                if (result.status === 200) {
                    users = (result.data.users)
                    if (result.data.error === 0 && result.data.users) {
                        setUsers(users);
                    } else {
                        setIsError(true);
                    }
                } else {
                    setIsError(true);
                }
            })
            .catch(e => {
                setIsError(true);
            });
    }, [message])


    function handleDelete(id) {
        console.log(id)
        setId(id)
        API.post('users/delete', {id})
            .then(result => {
                if (result.status === 200) {

                    if (result.data.error === 0) {
                        setMessage(result.data.message);
                        console.log(result.data.message)

                    } else {
                        setIsError(true);
                    }
                } else {
                    setIsError(true);
                }
            })
            .catch(e => {
                setIsError(true);
            });
        return <Redirect to="/users"/>
    }
    setTimeout(() => {
        setMessage(false)
    }, 5000)

    return (
        <>

            <Container className="mt-5">
                <Link to={{pathname: '/addAdmin/'}}> <Button variant="outline-primary" size="sm"
                                                             className="float-right mb-2">Add New Admin</Button></Link>
                <Table striped bordered hover size="sm" className="pb-2">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users && !!users.length && users.map((user, key) =>
                        <tr key={user.id}>
                            <td>{key+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Link to={{pathname: '/editAdmin/', state: {id: user.id}}}><Button
                                variant="outline-success" size="sm" className="ml-1">Edit</Button></Link><Button variant="outline-danger"
                                                                                                size="sm"
                                                                                                                 className="ml-2"
                                                                                                onClick={() => {
                                                                                                    handleDelete(user.id)
                                                                                                }}>Delete</Button>{}
                            </td>

                        </tr>)}
                    </tbody>
                </Table>
            </Container>
            <p className="text-danger text-center text-capitalize">{message}</p>
        </>
    )
}

export default withRouter(Users)
