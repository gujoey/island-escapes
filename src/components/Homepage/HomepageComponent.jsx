import React from 'react';
import CarouselComponent from './../Carousel/CarouselComponent';
import { Row, Col } from 'reactstrap';


export default class HomepageComponent extends React.Component{
	
	render(){
		return (
			<div className="homepageContainer">
				<CarouselComponent/>
				
				<Row className="[ row-eq-height ]">
					<Col md="8" className="[ d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<Row className="[ row-eq-height ]">
								<Col md="6"><a href="#/packages">Hawaii from NOK 12 000</a></Col>
								<Col md="6"><a href="#/packages">Bali from NOK 12 000</a></Col>
								<Col md="6"><a href="#/packages">Santorini from NOK 12 000</a></Col>
								<Col md="6"><a href="#/packages">Mykonos from NOK 12 000</a></Col>
							</Row>
						</div>
					</Col>
					
					<Col md="4" className="[ d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<ul className="[ col-home__list ]">
								<li className="[ col-home__list--active ]"><a href="/">Home</a></li>
								<li><a href="#/packages">Packages</a></li>
								<li><a href="#/contact">Contact</a></li>
							</ul>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}