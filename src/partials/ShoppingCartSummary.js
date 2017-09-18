import React from 'react';
import {Table} from 'react-bootstrap';

const ShoppingCartSummary = (props) => {

	return (
		<Table responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Product</th>
					<th>Deployment</th>
					<th>Model</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{props.shoppingCart.map((item, i) => {	
					if (item.price)	{
						return (
							<tr key={i}>
								<td>{i + 1}</td>
								<td>{item.product}</td>
								<td>{item.deployment}</td>
								<td>{item.model}</td>
								<td>{item.quantity}</td>
								<td>{item.price * item.quantity}</td>
							</tr>);
					}
					return null;			
				})}
			</tbody>
		</Table>);
}

export default ShoppingCartSummary;