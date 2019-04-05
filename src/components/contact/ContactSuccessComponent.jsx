import React from 'react';

export default class ContactSuccessComponent extends React.Component{
	
	render(){
		
		return(
			<div>
				<h1 className="[ contact-success-container__header ]">Inquiry sent</h1>
				<p>Thank you for your inquiry. <br/> We'll get in touch with you as soon as possible</p>
			</div>
		);
	}
}