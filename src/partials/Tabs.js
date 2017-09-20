import React from 'react';

const Tabs = (props) => {

    return (
    	<div>
	    	<ul className="steps">
		    	<li className={props.currTab === 0 ? 'current' : null} onClick={() => props.tabClick(0)}><div>Select Products</div></li>
		    	<li className={props.currTab === 1 ? 'current' : null} onClick={() => props.tabClick(1)}><div>Contact & Billing</div></li>
	    	</ul>
    	</div>);
}

export default Tabs;