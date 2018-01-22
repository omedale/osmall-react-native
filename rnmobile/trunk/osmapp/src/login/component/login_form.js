import React, { Component } from 'react';
import {TextInput,StyleSheet,View,Button,TouchableOpacity,Text,KeyboardAvoidingView,AsyncStorage} from 'react-native';
import Config from "../../../config.js";
import {Actions} from 'react-native-router-flux';
class LoginForm extends Component{

	state={
		email:"",
		password:""
	}
	handle_facebook_login=() => {
		alert("Work in progress");
	}
	redirect_to_registration=()=>{
		Actions.buyerregistration();
	}
	handle_ep_login=()=>{
		/*Fetch.*/
		url=Config.server_base_url+"authenticate";
		console.log(url);
		fetch(url, {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		email:this.state.email,
		password:this.state.password,
		})
		})
		.then((r)=>{
		console.log(r);
		
		if(r.status==200){
			
		}else{
			1/0;
		}
		return r.json();})
		.then((response)=>{
		console.log(response);
		alert(response.user.name);
		AsyncStorage.setItem('access_token',response.token);
		const value = AsyncStorage.getItem('access_token')
		
		})
		.catch((error)=>{console.log(error)});
		
	}
	render(){
		return (
		<KeyboardAvoidingView style={styles.container}>
		
		<TextInput style={styles.input}
		returnKeyType="next"
		 placeholder="Email"
		onChangeText={(text) => this.setState({email:text})}	
		keyboardType="email-address"
		autoCapitalize="none"
		autoCorrect={false}
		/>
		
		<TextInput style={styles.input} 
		placeholder="Password" 
		secureTextEntry
		returnKeyType="go" 
		
		onChangeText={(text) => this.setState({password:text})}	
		autoCorrect={false}
		autoCapitalize="none"
		/>
		<View style={styles.button_wrapper}>
		<TouchableOpacity style={styles.button_container}>
			<Text style={styles.button_text} onPress={()=>this.redirect_to_registration()}>Sign Up|</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button_container,styles.button_margin_right,styles.button_margin_left]}>
			<Text style={styles.button_text} onPress={()=> Actions.menu()}>Log In|</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.button_container}>
			<Text style={styles.button_text}>Forgot Password|</Text>
		</TouchableOpacity>
		</View>
		<Button
        	onPress={()=>this.handle_facebook_login()}
       		 title="Sign in with Facebook"
        	color="#4267B2"
     		 />		
		</KeyboardAvoidingView>	
		);
	}
	
}
export default LoginForm

const styles=StyleSheet.create({
container:{
padding:20,
justifyContent:"center",
marginBottom:150
},
input:{
height:40,
backgroundColor:'rgba(255,255,255,0.7)',
paddingHorizontal:10,
marginBottom:20
},
button_container:{
paddingVertical:15,
flexDirection:'row',

},
button_margin_right:{
marginRight:70
},
button_margin_left:{
marginLeft:70
},
button_text:{
color:"#34dabb",
textAlign:"center"
},
button_wrapper:{
flexWrap:'wrap',
alignItems:'flex-start',
flexDirection:'row'
}


});
