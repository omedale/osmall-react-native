import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View,TouchableOpacity,StyleSheet
,Button
 } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Collapsible from 'react-native-collapsible';
class ModalMenu extends Component {

	state = {
	modalVisible: false,
	categories: [
	{
            id: 1,
            name: 'Electronics',
            collapsed_state:true,
            subcat:[{
              id:1,
              name:'Tablets'
            }]
         },
	]
	}

	setModalVisible(visible) {
	this.setState({modalVisible: visible});
	}
	show_login(){

	this.setState({modalVisible:false});
		this.setModalVisible(false);
		Actions.login();
		console.log("Test");
  }

  to_openwish() {
    this.setState({ modalVisible: false });
    Actions.openwish();
  }

  to_openSMM() {
    this.setState({ modalVisible: false });
    Actions.smm();
  }

  to_openDiscount() {
    this.setState({ modalVisible: false });
    Actions.discount();
  }

	render() {
	return (
	<View style={styles.container}>
	<View style={styles.open_menu}>
	<Button
	onPress={() => { this.setModalVisible(true) }}
	title="Show Menu"
	color="red"
	accessibilityLabel="Learn more about menu"
	/>
	</View>

           <View>
              <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={()=>{alert("menu closed")}}>

                  <TouchableOpacity style = {styles.menu_container} >
                   <Text style = {styles.text} onPress={()=>this.show_login()} key="login">
                      Login
                   </Text>
                  </TouchableOpacity>
                  <View style={styles.menu_container}>
                  <TouchableOpacity>
                    <Text style={styles.text} onPress={() => this.to_openwish()} >
                      OpenWish
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.menu_container}>
                  <TouchableOpacity>
                    <Text style={styles.text} onPress={() => this.to_openSMM()} >
                      OpenSMM
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.menu_container}>
                  <TouchableOpacity>
                    <Text style={styles.text} onPress={() => this.to_openDiscount()} >
                    Discount
                    </Text>
                  </TouchableOpacity>
                </View>
                  <TouchableOpacity style = {styles.menu_container} >
                   <Text style = {styles.text} onPress={() => {Actions.hyper(); this.setModalVisible(false);}} key="login">
                      Hyper
                   </Text>
                  </TouchableOpacity>
                {
                   this.state.categories.map((item, index) => (
                    <View key={item.id}>
                      <TouchableOpacity
                         key = {item.id}
                         style = {styles.menu_container}
                        >
                         <Text style = {styles.text} key={item.id} onPress={(index) =>(
                         this.setState({collapsed_state:false}))}>
                            {item.name}
                         </Text>

                      </TouchableOpacity>

                     <Collapsible collapsed={item.collapsed_state}>
                       <Text key="1"> Yolo1 </Text>
                      </Collapsible>
                    </View>

                   ))


                }
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }} >
                  <Text>Close Menu</Text>
                </TouchableHighlight>
              	</Modal>
           </View>
         </View>
      )
    }
}
export default ModalMenu

const styles = StyleSheet.create({
  container: {


  },
  menu_container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c'
  },
  open_menu: {

  }
})
