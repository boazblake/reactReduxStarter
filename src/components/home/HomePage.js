import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>HOME PAGE</h1>
				<p>Sub Heading</p>
				<Link to="/about" className="btn btn-primary btn-lg">about</Link>
			</div>
		);
	}
}


export default HomePage;