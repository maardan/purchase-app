import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShoppingCartSummary from '../partials/ShoppingCartSummary';
import BillingForm from '../partials/BillingForm';

class ContactBilling extends Component {

	render() {

		const props = this.props;
		const {shoppingCart} = props;
		const cartSummary = ((shoppingCart.length > 0) && (shoppingCart[0].product.length > 0)) ? <ShoppingCartSummary shoppingCart={shoppingCart} /> : null;

		return (
			<div>
				{cartSummary}
				<BillingForm />
			</div>);
	}
}

const mapStateToProps = (state) => {
	return {
		shoppingCart: state.purchase.shoppingCart
	};
};

export default connect(mapStateToProps)(ContactBilling);