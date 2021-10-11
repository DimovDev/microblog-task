import React, {useEffect, useState} from 'react';
import Media from 'react-bootstrap/Media'
import {Container} from 'react-bootstrap'
import API from "../API";
import {Link} from "react-router-dom";
function Home() {

	let[posts,setPosts]=useState('')
	const[error,setIsError]=useState()
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

	}, [])
	return(
	<>
		<Container className="pt-5">
			<h1 className="text-center">Articles</h1>
					{posts && !!posts.length && posts.map((post, key) =>
				<Media className="pt-2" key={post.id}>
					<img src={`/postImages/${post.id}/${post.image}`}
						 alt={post.title}
						 className="align-self-center mr-4"
						 width={64} height={64} />
					<Media.Body>
						<h2>{post.title}</h2>
						<p>{post.content.substring(0, 300)}....<Link to={{pathname: '/singlePost/', state: {id: post.id}}}>Read more</Link></p>
					</Media.Body>
				</Media>
				)}

		</Container>
	</>
);

}

export default Home;
