import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import {fetchData, setTab} from '../actions';
import SelectProducts from './SelectProducts';
import ContactBilling from './ContactBilling';
import Description from '../partials/Description';
import Tabs from '../partials/Tabs';
import './App.css';

/**
* App is starting point (top node) of all components
*/	
class App extends Component {

	// Fetch and set the necessary data so no form data is hardcoded in
	componentDidMount() {
		const {fetchData} = this.props;
        fetchData();
	}

	render() {

		const {setTab, tab} = this.props;
		const currTabView = (tab === 'SELECT_PRODUCTS' ? <SelectProducts /> : <ContactBilling />);

		return (
			<Grid>
				<Description />
				<Tabs currTab={tab} tabClick={(tab) => setTab(tab)} />
				<hr/>
				{currTabView}
			</Grid>);
	}
}

const mapStateToProps = (state) => {
	return {
		tab: state.purchase.tab
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => dispatch(fetchData()),
		setTab: (tab) => dispatch(setTab(tab))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);