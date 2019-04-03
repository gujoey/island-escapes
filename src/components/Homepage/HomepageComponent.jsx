import React from 'react';
import CarouselComponent from './../Carousel/CarouselComponent';

export default class HomepageComponent extends React.Component{
	
	render(){
		return (
			<div className="homepageContainer">
				<CarouselComponent/>
				<div className="[ row row-eq-height ]">
					<div className="[ col-md-4 d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<h1>Flights</h1>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								<br/><br/>
							</p>
						</div>
					</div>
					
					<div className="[ col-md-4 d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<h1>Flights & Hotels</h1>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								<br/><br/>
							</p>
						</div>
					</div>
					
					<div className="[ col-md-4 d-flex flex-column mb-4 ]">
						<div className="[ col-home ]">
							<ul className="[ col-home__list ]">
								<li className="[ col-home__list--active ]"><a href="/">Home</a></li>
								<li><a href="/">About</a></li>
								<li><a href="/">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}