import React from 'react';
import CarouselComponent from './../../components/Carousel/CarouselComponent';
import { packages } from './../../components/Packages/PackageDestinationComponent';

export default class Packagespage extends React.Component{
	constructor(props){
		super(props);
	}
	
	
	createPackages(){
		console.log(packages);
	}
	
	render(){
		let app = this;
		
		app.createPackages();
		return(
			<div>
				<CarouselComponent/>
				<div className="[ row ]">
					hello world
				</div>
			</div>
		);
	}
}