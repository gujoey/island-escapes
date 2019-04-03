import React from 'react';
import NavigationComponent from './../Navigation/NavigationComponent';

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavigationComponent/>
				
				<div className="[ container ]">
					{this.props.children}
				</div>
			</div>
		); 
	}
}