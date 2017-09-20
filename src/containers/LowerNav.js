import React from 'react';
import {ControlLabel, Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';

class LowerNav extends React.Component {

	render() {
		const props = this.props;

		// get the sum of all (prices * quantity), if nothing has been added yet, return 0.00
		const totalPrice = props.shoppingCart.reduce((sum, item) => (sum + (item.price * item.quantity)), 0);

	    return (
	      	<div className="lower-nav">
				<div>
					<ControlLabel>{`Order Total: $${totalPrice || 0.00}`}</ControlLabel>
				</div>
				<div>
					{props.currTab === 0 ? 
						<Button className="lower-nav-btn-right" bsStyle="primary" onClick={() => props.tabClick(1)}>
							Next Step: Contact & Billing <Glyphicon glyph="arrow-right" />
						</Button> 
						: 
						<div>
							<Button className="lower-nav-btn-left" bsStyle="primary" onClick={() => props.tabClick(0)}>
								<Glyphicon glyph="arrow-left" /> Select Products
							</Button>
							<Button className="lower-nav-btn-right" bsStyle="success">
								Submit
							</Button> 						
						</div>
					}
				</div>
	      	</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		shoppingCart: state.purchase.shoppingCart
	};
};

export default connect(mapStateToProps)(LowerNav);