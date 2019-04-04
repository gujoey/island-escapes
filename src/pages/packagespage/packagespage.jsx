import React from 'react';
import CarouselComponent from './../../components/Carousel/CarouselComponent';
import PackagesComponent from './../../components/Packages/PackagesComponent';
import { packages } from './../../components/Packages/PackageDestinationComponent';
import { Row } from 'reactstrap';


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
					price = {value.price}
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
				<Row>
					{app.state.allPackages}
				</Row>
			</div>
		);
	}
}