import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNewProduct, updateCartProduct, updateCartDeployment, updateCartModel, updateDeploymentOptions, updateModelOptions, updateModelsPerProduct, handleQuantity, deleteProduct} from '../actions';
import ProductRow from '../partials/ProductRow';
import {Glyphicon} from 'react-bootstrap';

class SelectProducts extends Component {

	handleProductSelect(e, cartIndex) {

		const {updateDeploymentOptions, updateModelOptions, updateModelsPerProduct, updateCartProduct, updateCartDeployment, updateCartModel, productsData} = this.props;
		// i is the index of the selected option, it's subtracted by 1 to disregard the default "select" option
		const i = e.target.selectedIndex - 1; 
		const productName = e.target.value;

		// reset everytime a new Product or default "select" is option is clicked
		updateCartDeployment(cartIndex, '');		
		updateCartModel(cartIndex, '', '');			
		updateDeploymentOptions(cartIndex, []);
		updateModelOptions(cartIndex, []);
		updateModelsPerProduct(cartIndex, []);

		// avoid if selects the default "select"
		if (i !== -1) {
			// build a deploymentOptions array per product selected ex. "[1, 3]" if user selects "Barracuda Backup"
			const modelsPerProduct = productsData[i].product_models;
			const deploymentOptions = [...new Set(modelsPerProduct.map(item => item.deployment_id))];

			// update Shopping Cart
			updateCartProduct(cartIndex, productName);	

			// in the Shopping Cart array, each object will have its own deployment/model options array. 
			// this will constantly update depending on user product selection
			updateModelsPerProduct(cartIndex, modelsPerProduct);
			updateDeploymentOptions(cartIndex, deploymentOptions);
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

	// validation check for quantity input
	handleQuantityChange(value, cartIndex) {
		const {handleQuantity} = this.props;

		if (value) {
			const quantityInt = parseInt(value, 10);

			if ((Number.isInteger(quantityInt)) && (quantityInt > -1) && (quantityInt % 1 === 0)) {
				handleQuantity(cartIndex, quantityInt);
			}			
		}
		else {
			handleQuantity(cartIndex, '');
		}
	}

	// if/when user inputs nothing into the quantity field, automatically input 1 instead so we don't have a calculation with NaN
	validateQuantity(value, cartIndex) {
		const {handleQuantity} = this.props;

		if (value === '' || value === '0') {
			handleQuantity(cartIndex, 1);
		}		
	}

	// force scroll to bottom when user adds a another product
	addProductRow() {
		const {addAnotherProduct} = this.props;
		addAnotherProduct();
		window.scrollTo(0,document.body.scrollHeight);
	}

	render() {
		const {shoppingCart, deploymentKey, productsData, deleteProduct} = this.props;
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
				checkQuantity={(e) => this.validateQuantity(e.target.value, i)}				
				incQuantity={() => this.handleQuantityChange((item.quantity + 1), i)}
				decQuantity={() => this.handleQuantityChange((item.quantity - 1), i)}
				quantityChange={(e) => this.handleQuantityChange(e.target.value, i)} 
				selectProduct={(e) => this.handleProductSelect(e, i)}
				selectDeployment={(e) => this.handleDeploymentSelect(e, i, item.modelsPerProduct)}
				selectModel={(e) => this.handleModelSelect(e, i, item.modelOptions)}
			/>);

		return (
			<div>
				{products}
				<a className="add-product-link" onClick={() => this.addProductRow()}>
					<h4><Glyphicon glyph="plus-sign" /> Add another product</h4>
				</a>
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