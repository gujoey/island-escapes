import React from 'react';
import ContactComponent from './../../components/Contact/ContactComponent';

export default class ContactPage extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			isName: false,
			isEmail: false,
			isTelephone: false,
		}
		
		this.validateSubmit = this.validateSubmit.bind(this);
	}
	
	validateSubmit(values){
		let app = this;
		console.log(values);
		
		//validate name
		if (values.name === "" || values.name === undefined){
			app.setState({isName: "Please enter a name"});
			return;
		}else{
			app.setState({isName: false});
		}
		
		//validate email input
		let regExEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;

		if (!regExEmail.test(values.email)){
			app.setState({isEmail: "Please enter a valid e-mail adress"});
			return;
		}else{
			app.setState({isEmail: false});
		}
		
		//validate phone input
		let regExPhone = /^(\d{3}\.\d{3}\.\d{4})|(\d{3}-\d{3}-\d{4})|(\d{3}\s\d{3}\s\d{4})$/;
	
		if (!regExPhone.test(values.telephone)){
			app.setState({isTelephone: "Please enter a valid phone number (ex: 123 123 1234 or 123.123.1234 or 123-123-1234)"});
			return;
		}else{
			app.setState({isTelephone: false});
		}
		
		//redirect after validation
		app.props.history.push("/contact-success");
	}
	
	render(){
		let app = this;		
		return(
			<ContactComponent
				validateSubmit = {app.validateSubmit}
				nameErr = {app.state.isName}
				emailErr = {app.state.isEmail}
				telErr = {app.state.isTelephone}
			/>
		);
	}
}