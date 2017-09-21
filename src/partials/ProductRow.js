import React from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button, InputGroup, Glyphicon} from 'react-bootstrap';
/*
* A ProductRow is created for each new product added, each has its own selection controls
*/
const ProductRow = (props) => {

	return (
		<Row className="product-each fadeIn hello">
			<Col xs={12} sm={5} md={6} lg={6}>
				<ControlLabel>{`${props.cartIndex + 1} Select Your Product`}</ControlLabel>
				<FormGroup>
					<p>Product</p>
					<FormControl id={props.cartIndex === 0 ? 'highlight1' : ''} componentClass="select" onChange={props.selectProduct} value={props.currProduct}>
						<option key={0} value={null}>select</option>
						{props.productsData.map((obj, i) => <option key={i+1} value={obj.product_name}>{obj.product_name}</option>)}
					</FormControl>
				</FormGroup>

				<FormGroup>
					<p>Deployment Option</p>
					<FormControl id={props.cartIndex === 0 ? 'highlight2' : ''} componentClass="select" onChange={props.selectDeployment} disabled={props.deploymentOptions.length > 0 ? false : true} value={props.currDeployment}>
						<option key={0} value={null}>select</option>
						{props.deploymentOptions.map((obj, i) => <option key={i+1} value={obj}>{props.deploymentKey[obj]}</option>)}
					</FormControl>
				</FormGroup>

				<FormGroup>
					<p>Model</p>
					<FormControl id={props.cartIndex === 0 ? 'highlight3' : ''} componentClass="select" onChange={props.selectModel} disabled={props.modelOptions.length > 0 ? false : true} value={props.currModel}>
						<option key={0} value={null}>select</option>
						{props.modelOptions.map((obj, i) => <option key={i+1} value={obj.model_name}>{`${obj.model_name} ($${obj.model_price})`}</option>)}
					</FormControl>
				</FormGroup>
			</Col>

			<Col className="center" xs={6} sm={3} md={2} lg={2}>
				<ControlLabel>Quantity</ControlLabel>

				<FormGroup bsSize="small">
					<InputGroup>
						<InputGroup.Button>
							<Button bsSize="small" onClick={props.decQuantity} disabled={props.quantity <= 1 ? true : false}>
								<Glyphicon glyph="minus" />
							</Button>								
						</InputGroup.Button>
						<FormControl type="number" min="1" className="center" value={props.quantity} onChange={props.quantityChange} onBlur={props.checkQuantity} />
						<InputGroup.Button>
							<Button bsSize="small" onClick={props.incQuantity}>
								<Glyphicon glyph="plus" />
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>

			</Col>

			<Col className="center" xs={3} sm={2} md={2} lg={2}>
				<ControlLabel>Price</ControlLabel>
				<p>{props.price ? `$${props.price * props.quantity}` : null}</p>
			</Col>

			<Col className="center delete-btn" xs={3} sm={2} md={2} lg={2}>
				{props.cartLength < 2 ? null : <Button bsStyle="danger" bsSize="small" onClick={props.deleteProduct}>Delete</Button>}
			</Col>
		</Row>);
}

export default ProductRow;