import React, {useEffect, useState} from "react";
import {Container, Button, Form} from "react-bootstrap";
import API from "../API";


const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
       const [error, setIsError] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [post, setPost] = useState(false)

    const createPost = (e) => {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('content', content);
        formData.append('title', title);

        API.post('posts/create', formData).then(result => {
            if (result.status === 200) {
                if (result.data.error === 0 && result.data) {
                    setMessage(result.data.message)
                    setPost(post)
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

    }, [message, file, post])
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
                <h1>Add New Post</h1>
                <Form className="pt-3">
                    <Form.Group controlId="">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title}
                                      onChange={(event) => setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter content" value={content}
                                      onChange={(event) => setContent(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Please select image</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={onChange}

                        />
                    </Form.Group>
                    {file&&
                    <div className="form-group preview">
                        <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null} width={200} height={200}/>
                    </div>}
                    <Button variant="primary" onClick={() => createPost()}>
                        Submit
                    </Button>
                </Form>
            </Container>
            {message && <p className="text-danger text-center text-capitalize">{message}</p>}
        </>
    )
}
export default AddPost
