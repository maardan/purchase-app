import React from 'react';

const Tabs = (props) => {

    return (
    	<div>
	    	<ul className="steps">
		    	<li className={props.currTab === 'SELECT_PRODUCTS' ? 'current' : null} onClick={() => props.tabClick('SELECT_PRODUCTS')}><div>Select Products</div></li>
		    	<li className={props.currTab === 'SELECT_PRODUCTS' ? null : 'current'} onClick={() => props.tabClick('CONTACT_BILLING')}><div>Contact & Billing</div></li>
	    	</ul>
    	</div>);
}

export default Tabs;