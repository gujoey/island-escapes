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
							<h1 className="[ col-home__header ]">Destinations</h1>

							<Row className="[ row-eq-height ]">
								<Col md="6" className="[ mb-4 ]">
									<a href="#/packages">
										<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/hawaii.jpg")} alt="Hawaii"/>
										<span className="[ col-home__img-text ]">Hawaii</span>
									</a>
								</Col>
								<Col md="6">
									<a href="#/packages">
										<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/bali.jpg")} alt="Bali"/>
										<span className="[ col-home__img-text ]">Bali</span>
									</a>
								</Col>
								
								<Col md="6">
									<a href="#/packages">
										<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/mykonos.jpg")} alt="Bora Bora"/>
										<span className="[ col-home__img-text ]">Mykonos</span>
									</a>
								</Col>
								
								<Col md="6">
									<a href="#/packages">
										<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/santorini.jpg")} alt="Santorini"/>
										<span className="[ col-home__img-text ]">Santorini</span>
									</a>
								</Col>
							</Row>
						</div>
					</Col>
					
					<Col md="4" className="[ d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<h1 className="[ col-home__header ]">Reviews</h1>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}