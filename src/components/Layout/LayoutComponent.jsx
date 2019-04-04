import React from 'react';
import NavigationComponent from './../Navigation/NavigationComponent';
import FooterComponent from './../Footer/FooterComponent';
import { Container } from 'reactstrap';


export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavigationComponent/>
				
				<Container>
					{this.props.children}
				</Container>
				
				<FooterComponent/>
			</div>
		); 
	}
}