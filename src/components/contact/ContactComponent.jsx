import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactComponent extends React.Component{
	
	render(){
		
		return(
			<Form>
				<FormGroup>
					<Label for="name">Full name</Label>
					<Input type="email" name="email" id="name" placeholder="Full name" />
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input type="email" name="email" id="email" placeholder="E-mail" />
				</FormGroup>
				<FormGroup>
					<Label for="telephone">Telephone</Label>
					<Input type="tel" name="telephone" id="telephone" placeholder="Telephone" />
				</FormGroup>
				<FormGroup>
					<Label for="message">Message</Label>
					<Input type="textarea" name="message" id="message"/>
				</FormGroup>

				<Button>Submit</Button>
			</Form>
		);
	}
}