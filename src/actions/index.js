import jsonData from '../data/purchase_form_data';

// Normally, we'd do a network request, but since this is a pure frontend application it's pulling in data from the "data" folder
export const fetchData = () => {
	// Reduce a portion of the data to build a deployment key:value pair ex: {1: "Appliance", ...}
	const deploymentKey = jsonData.deployment_methods.reduce((acc, item) => {
		acc[item.deployment_id] = item.deployment_name;
		return acc;
	}, {});

	const productsData = jsonData.products;

	return {
		type: 'SET_DATA',
		deploymentKey,
		productsData
	};
}; 

export const setTab = (tab) => {
	return {
		type: 'SET_TAB',
		tab
	};
};

export const addNewProduct = () => {
	return {
		type: 'ADD_NEW_PRODUCT'
	};
};

export const handleQuantity = (cartIndex, quantity) => {
	return {
		type: 'SET_QUANTITY',
		cartIndex,
		quantity
	};
};

export const updateCartProduct = (cartIndex, product) => {
	return {
		type: 'UPDATE_SHOPPING_CART_PRODUCT',
		cartIndex,
		product
	};
};

export const updateCartDeployment = (cartIndex, deployment) => {
	return {
		type: 'UPDATE_SHOPPING_CART_DEPLOYMENT',
		cartIndex,
		deployment
	};
};

export const updateCartModel = (cartIndex, model, price) => {
	return {
		type: 'UPDATE_SHOPPING_CART_MODEL',
		cartIndex,
		model, 
		price
	};
};

export const updateDeploymentOptions = (cartIndex, deploymentOptions) => {
	return {
		type: 'UPDATE_DEPLOYMENT_OPTIONS',
		cartIndex,
		deploymentOptions
	};
};

export const updateModelOptions = (cartIndex, modelOptions) => {
	return {
		type: 'UPDATE_MODEL_OPTIONS',
		cartIndex,
		modelOptions
	};
};

export const updateModelsPerProduct = (cartIndex, modelsPerProduct) => {
	return {
		type: 'UPDATE_MODELS_PER_PRODUCT',
		cartIndex,
		modelsPerProduct
	};
};

export const deleteProduct = (cartIndex) => {
	return {
		type: 'DELETE_PRODUCT',
		cartIndex
	};
};