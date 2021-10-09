import React, {useEffect, useState} from 'react';
import Media from 'react-bootstrap/Media'
import {Container} from 'react-bootstrap'
import API from "../API";
import {Link} from "react-router-dom";

function SinglePost(props) {

	const {id} = props.location.state
	let[post,setPost]=useState('')
	const[error,setIsError]=useState()
	useEffect(() => {
		API.post('posts/post',{id})
			.then(result => {
				if (result.status === 200) {
					post = (result.data.post)
					console.log(post)
					if (result.data.error === 0 && result.data.post) {
						setPost(post);
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

	}, [])
	return(
	<>
		<Container className="pt-5">
			<h1 className="text-center">{post.title}</h1>

				<Media className="pt-2">
					<img src={`/postImages/${post.id}/${post.image}`}
						 alt={post.title}
						 className="align-self-center mr-4"
						 width={64} height={64} />
					<Media.Body>

						<p>{post.content}</p>
					</Media.Body>
				</Media>


		</Container>
	</>
);

}

export default SinglePost;
