import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import App from './pages/App';
import './index.css';

const initialState = window.__PRELOADED_STATE__;
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));