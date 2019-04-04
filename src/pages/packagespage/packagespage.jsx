import React from 'react';
import CarouselComponent from './../../components/Carousel/CarouselComponent';
import PackagesComponent from './../../components/Packages/PackagesComponent';
import { packages } from './../../components/Packages/PackageDestinationComponent';

export default class Packagespage extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			packages: [],
			allPackages: []
		}
	}
	
	componentDidMount(){
		let app = this;
		app.getPackages();
	}
	
	getPackages(){
		let app = this;
		app.setState({
			packages: packages
		});
	}
	
	createPackages(){
		let app = this;
		let allPackages = app.state.packages;
		
		allPackages.forEach((value, key)=>{
			app.state.allPackages.push(
				<PackagesComponent
					image = {value.image}
					destination = {value.destination}
					description = {value.description}
					key = {key}
				/>
			);
		});
		
	}
	
	render(){
		let app = this;
		app.createPackages();
		
		return(
			<div>
				<CarouselComponent/>
				<div className="[ row ]">
					{app.state.allPackages}
				</div>
			</div>
		);
	}
}