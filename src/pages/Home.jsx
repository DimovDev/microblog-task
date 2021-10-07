import React from 'react';
import Media from 'react-bootstrap/Media'
import {Container} from 'react-bootstrap'
function Home() {
	return(
	<>
		<Container className="pt-5">
		<div>
			<ul className="list-unstyled">
				<Media as="li">
					<img
						width={64}
						height={64}
						className="mr-3"
						src="logo192.png"
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>List-based media object</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
							ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
							tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
							fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>

				<Media as="li">
					<img
						width={64}
						height={64}
						className="mr-3"
						src="logo192.png"
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>List-based media object</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
							ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
							tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
							fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>

				<Media as="li">
					<img
						width={64}
						height={64}
						className="mr-3"
						src="logo192.png"
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5>List-based media object</h5>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
							ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
							tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
							fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>
			</ul>
		</div>
		</Container>
	</>
);

}

export default Home;
