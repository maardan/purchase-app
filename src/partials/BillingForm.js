import React from 'react';
import {Row, Col, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const BillingForm = (props) => {

	return (
		<Row>
			<Col xs={8} xsOffset={2} sm={4} smOffset={4} md={4} mdOffset={4} lg={4} lgOffset={4}>
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<ControlLabel>Full Name</ControlLabel>
						<FormControl type="text" placeholder="Full Name" />
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<ControlLabel>Credit Card Number</ControlLabel>
						<FormControl type="number" placeholder="0000-0000-0000-0000" />
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<ControlLabel>Expiration Date</ControlLabel>
						<FormControl type="number" placeholder="00-00" />
					</FormGroup>
				</Form>
			</Col>
		</Row>);
}

export default BillingForm;