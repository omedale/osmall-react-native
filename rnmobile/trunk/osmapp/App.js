import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import configureStore from './src/smm/stores/configureStore';
import Route from "./routes.js";

const store=configureStore();

export default class App extends Component {
	
	render(){
		return(
		/*	<Provider store={store}>*/
				<Route />
		/*	</Provider>*/
		);
	}
}









