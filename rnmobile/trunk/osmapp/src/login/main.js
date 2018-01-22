import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,TouchableOpacity,StyleSheet
	,Button,Image
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import LoginForm from "./component/login_form"
class Login extends Component{
	render()
	{
	return(
	<View style={styles.container}>
		<View style={styles.logo_container}>
			<Image source={require("./assets/logo-white.png")} style={styles.logo}/>
		</View>
		<View style={styles.form_container}>
			<LoginForm />
		</View>
	</View>	
	);
	}
}
const styles=StyleSheet.create({
	container:{
	flex:1,
	backgroundColor:"black"
	},
	logo_container:{
	alignItems:"center",
	flexGrow:1,
	justifyContent:'center'
	},
	logo:{
	resizeMode:"contain",
	width:300
	
	}

	}
);
export default Login;
