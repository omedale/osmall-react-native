import React,{Component} from 'react';
import {Platform} from 'react-native';
import { Actions,Router,Scene,Stack } from 'react-native-router-flux';
import Login from "./src/login/main.js";
import Hyper from "./src/hyper/main.js";
import OpenWish from "./src/openwish/main.js";
import ModalMenu from "./src/menu/main.js";
import Discount from "./src/hm_discount/main.js";
import SMMView from './src/smm/main.js';
import Landing from './src/landing_page/main.js';
import Report from './src/report/main.js';
import Other_report from './src/report/component/other_report.js';
import SalesMemo from './src/sales_memo/main.js';
import FairMode from './src/fair_mode/main.js';
// import ProductMapper from './src/product_mapper/main.js';
// import BuyerRegistration from "./src/buyer_registration/main.js";
/*
	Key has to be unique
	Only one entry can have the initial prop
	
*/
class Route extends Component{
	state={
		hideNavBar:Platform.select({
			ios:true,
			android: true
		})
	}
	render(){
	return(
	<Router>
	<Stack key="root">
		<Scene key="login" component={Login}  
			hideNavBar={this.state.hideNavBar}/>
		{/*<Scene key="buyerregistration"
			component={BuyerRegistration}
			hideNavBar={this.state.hideNavBar} />

		<Scene key="product_mapper" component={ProductMapper}
			initial hideNavBar={this.state.hideNavBar} />*/}
		<Scene key="openwish" component={OpenWish}
			hideNavBar={this.state.hideNavBar} />

		<Scene key="hyper" component={Hyper} 
			hideNavBar={this.state.hideNavBar}/>

		<Scene key="menu" component={ModalMenu} 
			hideNavBar={this.state.hideNavBar}/>

		<Scene key="smm" component={SMMView}
			hideNavBar={this.state.hideNavBar}/>

		<Scene key="discount" component={Discount}
			hideNavBar={this.state.hideNavBar}/>

		<Scene key="items" component={Landing}
			hideNavBar={this.state.hideNavBar}/>

		<Scene key="report" component={Report}
			hideNavBar={this.state.hideNavBar}/>
		
		<Scene key="other_report" component={Other_report}
			hideNavBar={this.state.hideNavBar} />
		

		<Scene key="fair_mode" component={FairMode}
			hideNavBar={this.state.hideNavBar} />

		<Scene initial key="sales_memo" component={SalesMemo}
			hideNavBar={this.state.hideNavBar}/>
	</Stack>
	</Router>
	)
	}
}

export default Route;
