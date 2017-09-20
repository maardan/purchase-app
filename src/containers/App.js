import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Carousel} from 'react-bootstrap';
import {fetchData, setTab} from '../actions';
import SelectProducts from './SelectProducts';
import ContactBilling from './ContactBilling';
import Description from '../partials/Description';
import Tabs from '../partials/Tabs';
import LowerNav from './LowerNav';
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
		const {setTab, tabIndex} = this.props;

		return (
			<Grid>

				<Description />

				<Tabs currTab={tabIndex} tabClick={(tabIndex) => setTab(tabIndex)} />

				<hr/>

				<Carousel activeIndex={tabIndex} controls={false} direction={null} indicators={false}>
					<Carousel.Item>
						<SelectProducts />
					</Carousel.Item>
					<Carousel.Item>
						<ContactBilling />
					</Carousel.Item>
				</Carousel>

				<hr/>

				<LowerNav currTab={tabIndex} tabClick={(tabIndex) => setTab(tabIndex)} />

			</Grid>);
	}
}

const mapStateToProps = (state) => {
	return {
		tabIndex: state.purchase.tabIndex
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => dispatch(fetchData()),
		setTab: (tabIndex) => dispatch(setTab(tabIndex))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);