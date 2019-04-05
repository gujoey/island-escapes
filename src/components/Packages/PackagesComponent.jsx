import React from 'react';
import { Col } from 'reactstrap';

export default class PackagesComponent extends React.Component{
	
	render(){
		let app = this;
		
		return(
			<Col md="4" className="[ d-flex flex-column mb-4 ]">
				<div className="[ packages-column ]">
					<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/" + app.props.image + ".jpg")} alt={app.props.destination}/>
					<h1 className="[ packages-column__header ]">{app.props.destination}</h1>
					<p>{app.props.description}</p>
					<p className="[ packages-column__price ]">prices from NOK {app.props.price}</p>
					<button type="button" className="btn btn-primary packages-column__btn">View More</button>
				</div>
			</Col>
		);
	}
}