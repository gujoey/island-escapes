import React from 'react';

export default class PackagesComponent extends React.Component{
	
	render(){
		let app = this;
		
		return(
			<div className="[ col-md-4 d-flex flex-column mb-4 ]">
				<div className="[ col-about ]">
					<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/" + app.props.image + ".jpg")} alt={app.props.destination}/>
					<h1>{app.props.destination}</h1>
					<p>{app.props.description}</p>
					<button type="button" className="btn btn-primary col-about__btn">View More</button>
				</div>
			</div>
		);
	}
}