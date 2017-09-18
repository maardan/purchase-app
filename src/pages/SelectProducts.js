import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTab, addNewProduct, updateCartProduct, updateCartDeployment, updateCartModel, updateDeploymentOptions, updateModelOptions, updateModelsPerProduct, handleQuantity, deleteProduct} from '../actions';
import ProductRow from '../partials/ProductRow';
import {Button, Glyphicon, ControlLabel} from 'react-bootstrap';

class SelectProducts extends Component {

	handleProductSelect(e, cartIndex) {

		const {updateDeploymentOptions, updateModelOptions, updateModelsPerProduct, updateCartProduct, updateCartDeployment, updateCartModel, productsData} = this.props;
		const i = e.target.selectedIndex - 1;
		const productName = e.target.value;

		// reset Deployment & Model options to "select" everytime a Product is selected
		updateDeploymentOptions(cartIndex, []);
		updateModelOptions(cartIndex, []);
		updateModelsPerProduct(cartIndex, []);

		// avoid if selects the default "select"
		if (i !== -1) {
			// build a deploymentOptions array per product selected ex. "[1, 3]" if user selects "Barracuda Backup"
			const modelsPerProduct = productsData[i].product_models;
			const deploymentOptions = [...new Set(modelsPerProduct.map(item => item.deployment_id))];

			// in the Shopping Cart array, each object will have its own deployment/model options array. 
			// this will constantly update depending on user product selection
			updateModelsPerProduct(cartIndex, modelsPerProduct);
			updateDeploymentOptions(cartIndex, deploymentOptions);

			// update Shopping Cart
			updateCartProduct(cartIndex, productName);	
			updateCartDeployment(cartIndex, '');		
			updateCartModel(cartIndex, '', '');		
		}
	}

	handleDeploymentSelect(e, cartIndex, modelsPerProduct) {
		const {updateModelOptions, updateCartDeployment} = this.props;
		const i = e.target.selectedIndex - 1;
		const deploymentID = e.target.value;

		if (i !== -1) {
			const modelOptions = modelsPerProduct.filter(obj => obj.deployment_id === parseInt(deploymentID, 10));

			// update Shopping Cart
			updateModelOptions(cartIndex, modelOptions);
			updateCartDeployment(cartIndex, deploymentID);				
		}		
	}

	handleModelSelect(e, cartIndex, modelOptions) {
		const {updateCartModel} = this.props;
		const i = e.target.selectedIndex - 1;
		const modelName = e.target.value;

		if (i !== -1) {
			const price = modelOptions[i].model_price;

			// update Shopping Cart
			updateCartModel(cartIndex, modelName, price);			
		}
	}

	handleQuantityChange(value, cartIndex) {
		const {handleQuantity} = this.props;

		if (value.length > 0) {
			const quantityInt = parseInt(value, 10);

			if ((Number.isInteger(quantityInt)) && (quantityInt > -1) && (quantityInt % 1 === 0)) {
				handleQuantity(cartIndex, quantityInt);
			}			
		}
		else {
			handleQuantity(cartIndex, '');
		}
	}

	// This is to handle if/when user inputs nothing into the quantity field, to automatically put 1 instead so we don't have a calculation with NaN
	validateQuantity(value, cartIndex) {
		const {handleQuantity} = this.props;

		if (value === '') {
			handleQuantity(cartIndex, 1);
		}		
	}

	render() {
		const {addAnotherProduct, shoppingCart, deploymentKey, productsData, handleQuantity, deleteProduct} = this.props;
		const totalPrice = (shoppingCart[0].price ? shoppingCart.reduce((sum, item) => (sum + (item.price * item.quantity)), 0) : '0.00');

		/**
		* Everytime user clicks "Add another product" a new product object is pushed into the Shopping Cart array
		*/		
		const products = shoppingCart.map((item, i) => 
			<ProductRow 
				key={i}
				cartIndex={i}
				cartLength={shoppingCart.length}
				deploymentKey={deploymentKey}
				productsData={productsData}
				modelOptions={item.modelOptions}
				deploymentOptions={item.deploymentOptions}
				currProduct={item.product} 
				currDeployment={item.deployment} 
				currModel={item.model} 
				quantity={item.quantity}
				price={item.price}
				deleteProduct={() => deleteProduct(i)}
				incQuantity={() => handleQuantity(i, (item.quantity + 1))}
				decQuantity={() => handleQuantity(i, (item.quantity - 1))}
				checkQuantity={(e) => this.validateQuantity(e.target.value, i)}
				quantityChange={(e) => this.handleQuantityChange(e.target.value, i)} 
				selectProduct={(e) => this.handleProductSelect(e, i)}
				selectDeployment={(e) => this.handleDeploymentSelect(e, i, item.modelsPerProduct)}
				selectModel={(e) => this.handleModelSelect(e, i, item.modelOptions)}
			/>);

		return (
			<div>
				{products}
				<a className="add-product-link" onClick={addAnotherProduct}>
					<h4><Glyphicon glyph="plus-sign" /> Add another product</h4>
				</a>
				<hr/>
				<div className="lower-third">
					<div>
						<ControlLabel>Order Total: ${totalPrice}</ControlLabel>
					</div>
					<div>
						<Button bsStyle="primary" onClick={() => setTab('CONTACT_BILLING')}>Next Step: Contact & Billing</Button>
					</div>
				</div>
			</div>);
	}
}

const mapStateToProps = (state) => {
	return { 
		shoppingCart: state.purchase.shoppingCart,
		deploymentKey: state.purchase.deploymentKey,
		productsData: state.purchase.productsData
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTab: (tab) => dispatch(setTab(tab)),
		addAnotherProduct: () => dispatch(addNewProduct()),
		updateCartProduct: (cartIndex, product) => dispatch(updateCartProduct(cartIndex, product)),
		updateCartDeployment: (cartIndex, deployment) => dispatch(updateCartDeployment(cartIndex, deployment)),
		updateCartModel: (cartIndex, model, price) => dispatch(updateCartModel(cartIndex, model, price)),
		updateDeploymentOptions: (cartIndex, deploymentOptions) => dispatch(updateDeploymentOptions(cartIndex, deploymentOptions)),
		updateModelOptions: (cartIndex, modelOptions) => dispatch(updateModelOptions(cartIndex, modelOptions)),
		updateModelsPerProduct: (cartIndex, modelsPerProduct) => dispatch(updateModelsPerProduct(cartIndex, modelsPerProduct)),
		handleQuantity: (cartIndex, quantity) => dispatch(handleQuantity(cartIndex, quantity)),
		deleteProduct: (cartIndex) => dispatch(deleteProduct(cartIndex))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProducts);