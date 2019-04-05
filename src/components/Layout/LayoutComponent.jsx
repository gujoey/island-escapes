import React from 'react';
import NavigationComponent from './../Navigation/NavigationComponent';
import FooterComponent from './../Footer/FooterComponent';
import { Container } from 'reactstrap';


export default class Layout extends React.Component {
	render() {
		let app = this;
		let path = app.props.location;

		return (			
			<div>
				<NavigationComponent location={path}/>
				
				<Container>
					{this.props.children}
				</Container>
				
				<FooterComponent/>
			</div>
		); 
	}
}