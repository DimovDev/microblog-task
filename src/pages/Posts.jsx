import React, {useEffect, useState} from 'react';
import {Container, Table, Button} from "react-bootstrap";
import API from "../API"


import {withRouter, Link, Redirect,} from "react-router-dom";
import axios from "axios";
import e from "cors";


function Posts({props}) {
    const [isError, setIsError] = useState(false);
    let [posts, setPosts] = useState(false);
    const [message, setMessage] = useState(false)
    const [id, setId] = useState(false)
    let [src, setSrc] = useState("")
    let [img, setImg] = useState([])
    useEffect(() => {
        API.post('posts/posts')
            .then(result => {
                if (result.status === 200) {
                    posts = (result.data.posts)

                    if (result.data.error === 0 && result.data.posts) {
                        setPosts(posts);
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



    setTimeout(() => {
        setMessage(false)
    }, 5000)

    function handleDelete(id) {
        console.log(id)
        setId(id)
        API.post('posts/delete', {id})
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
        return <Redirect to="/posts"/>
    }

    return (
        <>

            <Container className="mt-5">
                <Link to={{pathname: '/addPost/'}}> <Button variant="outline-primary" size="sm"
                                                            className="float-right mb-2">Add New Post</Button></Link>
                <Table striped bordered hover size="sm" className="pb-2">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts && !!posts.length && posts.map((post, key) =>
                        <tr key={post.id}>
                            <td>{key + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.content.substring(0, 50)}....</td>
                            <td><img src={`/postImages/${post.id}/${post.image}`} alt={post.title} width={50}
                                     height={50}/></td>
                            <td><Link to={{pathname: '/editPost/', state: {id: post.id}}}><Button
                                variant="outline-success" size="sm" className="ml-1">Edit</Button></Link>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    className="ml-2"
                                    onClick={() => {
                                        handleDelete(post.id)
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

export default withRouter(Posts)
