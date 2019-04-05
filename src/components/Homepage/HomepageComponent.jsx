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
							<h1 className="[ col-home__header ]">Popular destinations</h1>

							<Row className="[ row-eq-height homepageContainer__row ]">
								<Col md="6" className="[ mb-4 ]">
									<a href="#/packages">
										<div className="[ col-home__overlay ]">
											<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/hawaii.jpg")} 	alt="Hawaii"/>
											<span className="[ col-home__img-text ]">Hawaii</span>
										</div>
									</a>
								</Col>
								<Col md="6" className="[ mb-4 ]">
									<a href="#/packages" >
										<div className="[ col-home__overlay ]">
											<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/mykonos.jpg")} alt="Mykonos"/>
											<span className="[ col-home__img-text ]">Mykonos</span>
										</div>
									</a>
								</Col>
								
								<Col md="6" className="[ mb-4 ]">
									<a href="#/packages">
										<div className="[ col-home__overlay ]">
											<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/bali.jpg")} alt="Bali"/>
											<span className="[ col-home__img-text ]">Bali</span>
										</div>
									</a>
								</Col>
								
								<Col md="6" className="[ mb-4 ]">
									<a href="#/packages">
										<div className="[ col-home__overlay ]">
											<img className="[ img-fluid ]" src={require("./../../img/photos/destinations/santorini.jpg")} alt="Santorini"/>
											<span className="[ col-home__img-text ]">Santorini</span>
										</div>
									</a>
								</Col>
							</Row>
						</div>
					</Col>
					
					<Col md="4" className="[ d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<h1 className="[ col-home__header ]">Reviews</h1>
							<Row>
								<Col md="12">
									<h2 className="[ col-home__header-two ]">Great vacation</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
										<span className="[ col-home--grey ]"><i>- James May</i></span>
									</p><br/>
								</Col>								<Col md="12">
									<h2 className="[ col-home__header-two ]">Superb customer service</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
										<span className="[ col-home--grey ]"><i>- Margareth Ways</i></span>
									</p>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}