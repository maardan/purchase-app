import {combineReducers} from 'redux';

const initialState = {
	deploymentKey: {},
	productsData: [],
	tab: 'SELECT_PRODUCTS',
	shoppingCart: [{
		product: '',
		deployment: '',
		model: '',
		quantity: 1,
		price: '',
		deploymentOptions: [],
		modelOptions: [],
		modelsPerProduct: []
	}]
};

const purchase = (state = initialState, action) => {

	switch(action.type) {

		case 'SET_DATA' : { 
			return Object.assign({}, state, {deploymentKey: action.deploymentKey, productsData: action.productsData});
		}
		case 'SET_TAB' : { 
			return Object.assign({}, state, {tab: action.tab});
		}
		case 'ADD_NEW_PRODUCT' : { 
			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.concat({
					product: '',
					deployment: '',
					model: '',
					quantity: 1,
					price: '',
					deploymentOptions: [],
					modelOptions: [],
					modelsPerProduct: []
				})
			});
		}
		case 'UPDATE_SHOPPING_CART_PRODUCT' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { product : action.product });
				})
			});
		} 
		case 'UPDATE_SHOPPING_CART_DEPLOYMENT' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { deployment : action.deployment });
				})
			});
		} 
		case 'UPDATE_SHOPPING_CART_MODEL' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { model : action.model, price: action.price });
				})
			});
		} 
		case 'UPDATE_DEPLOYMENT_OPTIONS' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { deploymentOptions : action.deploymentOptions });
				})
			});
		} 
		case 'UPDATE_MODEL_OPTIONS' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { modelOptions : action.modelOptions });
				})
			});
		} 
		case 'UPDATE_MODELS_PER_PRODUCT' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { modelsPerProduct : action.modelsPerProduct });
				})
			});
		} 		
		case 'SET_QUANTITY' : {

			return Object.assign({}, state, {
				shoppingCart : state.shoppingCart.map((item, i) => {

					if (i !== action.cartIndex) {
						return item;
					}
					return Object.assign({}, item, { quantity : action.quantity });
				})
			});
		} 	
		case 'DELETE_PRODUCT' : {

			return Object.assign({}, state, { shoppingCart: state.shoppingCart.filter((item, i) =>  i !== action.cartIndex) });
		} 
		default : return state;
	}
}

export default combineReducers({
	purchase
});