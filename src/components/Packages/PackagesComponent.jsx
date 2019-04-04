import React from 'react';

export default class Packagespage extends React.Component{
	
	render(){
		return(
			<div class="[ col-md-4 d-flex flex-column mb-4 ]">
				<div class="col-about">
					<img class="img-responsive" src={app.props.image} alt="placeholder image"/>
					<h1>{app.props.destination}</h1>
					<p>{app.props.content}</p>
					<button type="button" class="btn btn-primary col-about__btn">View More</button>
				</div>
			</div>
		);
	}
}