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
		let app = this;
		let path = app.props.location;
		
		const home = path === "/" ? "[ navigation__active ]" : "";
		const packages = path === "/packages" ? "[ navigation__active ]" : "";
		const contact = path === "/contact" || path === "/contact-success" ? "[ navigation__active ]" : "";
		
		return (
			<Navbar className="[ navigation ]" color="light" light expand="md">
				<NavbarBrand className="[ navigation__navbrand ]" href="#/">Island Escapes</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />

				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="[ ml-auto ]" navbar>
						<NavItem>
							<NavLink className={home} href="#/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={packages} href="#/packages">Packages</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={contact} href="#/contact">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}