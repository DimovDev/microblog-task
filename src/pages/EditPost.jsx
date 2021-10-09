import {Button, Container, Form} from "react-bootstrap";
import API from "../API";
import React, {useEffect, useState} from "react";

const EditAdmin=(props)=> {
    const {id} = props.location.state

    const [title, setTitle] = useState('');
    const [content, setContent] =  useState('');
    const [image, setImage] = useState('');
    const [error, setIsError] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [post, setPost] = useState('Choose File');

    function editPost() {


        API.post('posts/edit', {id}).
        then(result => {
                if (result.status === 200) {
                    if (result.data.error === 0 && result.data) {

                        console.log('result', result.data.post.title)
                        setTitle(result.data.post.title)
                        setContent(result.data.post.content)
                        setFile(result.data.post.file)
setPost(result.data.post)
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
    function updatePost() {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('content', content);
        formData.append('title', title);
        formData.append('id', id);
        API.post('posts/update', formData).then(result => {
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
        editPost()
    },[])
    setTimeout(() => {
        setMessage(false)
    }, 5000)

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
    return (
        <>
            <Container className="pt-5">
                <h1>Edit Post</h1>
                <Form className="pt-3">
                    <Form.Group controlId="">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter content" value={content} onChange={(event) => setContent(event.target.value)}/>
                    </Form.Group>
                    <div className="form-group preview">
                        <img src={`/postImages/${post.id}/${post.image}`} alt={post.title} width={200} height={200} />
                    </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Please select new image </Form.Label>
                        <Form.Control type="file"   accept="image/*" onChange={onChange}
                            // onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))}
                        />
                    </Form.Group>

                    <Button variant="primary"  onClick={() => updatePost()}>
                        Submit
                    </Button>
                </Form>
            </Container>
            <p className="text-danger text-center text-capitalize">{message}</p>

        </>
    )
}
export default EditAdmin
