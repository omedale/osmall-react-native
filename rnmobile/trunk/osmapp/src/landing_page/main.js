import React, { Component } from 'react';
import { View } from 'react-native';
import LandingPage from './components/landing';
class Landing extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<LandingPage />
			</View>
		);
	}
}
export default Landing;