import React from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const BillingForm = (props) => {

	return (
		<Row>
			<Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>

				<Col xs={12} sm={12} md={12} lg={12}>
					<FormGroup>
						<ControlLabel>Full Name</ControlLabel>
						<FormControl type="text" placeholder="John Doe" />
					</FormGroup>
				</Col>

				<Col xs={12} sm={12} md={12} lg={12}>
					<FormGroup>
						<ControlLabel>Credit Card Number</ControlLabel>
						<FormControl type="number" placeholder="0000-0000-0000-0000" />
					</FormGroup>
				</Col>

				<Col xs={8} sm={8} md={8} lg={8}>
					<FormGroup>
						<ControlLabel>Expiration Date</ControlLabel>
						<div className="form-flex">
							<FormControl type="number" placeholder="MM" />
							<FormControl type="number" placeholder="DD" />
						</div>

					</FormGroup>
				</Col>

				<Col xs={4} sm={4} md={4} lg={4}>
					<FormGroup>
						<ControlLabel>CV Code</ControlLabel>
						<FormControl type="number" placeholder="123" />	
					</FormGroup>						
				</Col>

			</Col>
		</Row>);
}

export default BillingForm;