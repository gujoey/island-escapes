import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(){
		let app = this;
		
		let formValues = {
			name: app.nameInput.value,
			email: app.emailInput.value,
			telephone: app.telephoneInput.value,
			message: app.messageInput.value
		}
		
		app.props.validateSubmit(formValues);
	}
	
	render(){
		let app = this;
		
		
		return(
			<Form>
				<FormGroup>
					<Label for="name">Full name <span className="[ contact-form__input--required ]">*</span></Label>
					<Input type="email" innerRef={(node) => app.nameInput = node} name="email" id="name" placeholder="Full name" />
					<span className="[ contact-form__input--error ]">{app.props.nameErr}</span>
				</FormGroup>
				<FormGroup>
					<Label for="email">Email <span className="[ contact-form__input--required ]">*</span></Label>
					<Input type="email" innerRef={(node) => app.emailInput = node} name="email" id="email" placeholder="E-mail" />
					<span className="[ contact-form__input--error ]">{app.props.emailErr}</span>
				</FormGroup>
				<FormGroup>
					<Label for="telephone">Telephone <span className="[ contact-form__input--required ]">*</span></Label>
					<Input type="tel" innerRef={(node) => app.telephoneInput = node} name="telephone" id="telephone" placeholder="Telephone" />
					<span className="[ contact-form__input--error ]">{app.props.telErr}</span>
				</FormGroup>
				<FormGroup>
					<Label for="message">Message</Label>
					<Input type="textarea" innerRef={(node) => app.messageInput = node} name="message" id="message"
						placeholder="Message (if no message is provided, we'll contact you directly as soon as possible)"
					/>
				</FormGroup>
				
				<p className="[ contact-form__info ]"><span className="[ contact-form__input--required ]">*</span> required</p>
				<Button onClick={app.handleSubmit}>Submit</Button>
			</Form>
		);
	}
}