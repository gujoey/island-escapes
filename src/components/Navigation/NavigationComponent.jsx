import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export default class NavigationComponent extends React.Component {
  constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
		this.state = {
		  isOpen: false
		};
	}
	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Island Escapes</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />

				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="[ ml-auto ]" navbar>
						<NavItem>
							<NavLink href="#/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#/packages">Packages</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#/contact">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}