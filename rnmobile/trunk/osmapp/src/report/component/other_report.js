import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList, ScrollView, TouchableHighlight} from 'react-native';

const data = [{
  no: 1,
  name: "book",
  qty: 30,
  confirm: '',
  lost: '' 
}, {
  no: 2,
  name: "cups",
  qty: 12,
  confirm: '',
  lost: '' 
}, {
  no: 1,
  name: "bags",
  qty: 9,
  confirm: '',
  lost: '' 
}, {
  no: 1,
  name: "bag",
  qty: 9,
  confirm: '',
  lost: '' 
}]

const CustomButton = ({backgroundColor, _onPressButton, text }) => (
  <TouchableHighlight onPress={_onPressButton} underlayColor="white" 
    style= {{flex: 1}}
    >
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
  </TouchableHighlight>
)



class Other_report extends Component {
  constructor() {
    super();
    this.state = {
      data
    }

  }
  _renderItem = ({item}) => (
    <View style={{height: 25, flexDirection: 'row', marginTop: 3}}>
      <Text style={[styles.list_item, {flex: 0.5}]}>{this.state.data.indexOf(item) +1}</Text>
        <Text style={[styles.list_item]}>{item.name}</Text>
        <Text style={[styles.list_item,{flex: 0.5}]}>{item.qty}</Text>
        <Text style={[styles.list_item]}>{item.confirm}</Text>
        <Text style={[styles.list_item]}>{item.lost}</Text>
      </View>
  );
  _keyExtractor = (item, index) => item.no;

  _onPressButton = () => alert('button pressed')

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#E1E2E1'}}> 
        <View style={{margin: 20}}>
            <View  style={{flexDirection: 'row', marginTop: 50}}>
              <Text style={styles.header}>Report</Text>
            </View>
            <View style={styles.list_item_container}>
              <Text style={styles.list_header}>No</Text>
              <Text style={[styles.list_header, {flex: 1}]}>Name</Text>
              <Text style={styles.list_header}>Qty</Text>
              <Text style={[styles.list_header, {flex: 1, backgroundColor: '#880E4F'}]}>confirm</Text>
              <Text style={[styles.list_header, {flex: 1, backgroundColor: '#BF360C'}]}>Lost</Text>
            </View>
            <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
            <View style={{flexDirection:'row', flex: 1, marginTop: 20, marginBottom: -20}}>
              <View style={{flex: 1}}/>
              <CustomButton 
                backgroundColor='#1976d2'
                _onPressButton={this._onPressButton}
                text='Confirm' 
              />
              <CustomButton 
                backgroundColor='#000a12'
                _onPressButton={this._onPressButton}
                text='Back' 
              />
            </View>
            <View style={{flexDirection:'row', flex: 1, marginBottom: -20}}>
              <CustomButton 
                backgroundColor='#d32f2f'
                _onPressButton={this._onPressButton}
                text='Delete' 
              />
              <CustomButton 
                backgroundColor='#d32f2f'
                _onPressButton={this._onPressButton}
                text='Void All' 
              />
              <View style={{flex: 1}}/>
            </View>
          </View>  
        </ScrollView>
      );
  }
}




const styles = StyleSheet.create({
    button: {
    elevation: 4,
    height: 90,
    borderRadius: 12,
    marginBottom: 30,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },

    header: {
        flex: 1,
        color: 'black',
        fontSize:20,
        fontWeight:'400',
        alignSelf: 'flex-start'
    },
    list_item_container: { 
        paddingTop: 5,
        height: 30,
        flexDirection: 'row',
        marginTop: 2,
        borderRadius: 15,
        marginBottom: 1
    },
    list_item: {
        elevation: 1,
        paddingLeft: 5,
        color: 'black',
        fontSize: 14,
        flex: 1,
        backgroundColor: 'white'
    },
    list_header: {
        color: 'white',
        fontSize: 14,
        flex: 0.5,
        fontWeight:'400',
        paddingLeft: 4,
        backgroundColor: '#EC407A',
        elevation: 4
    },
    Half_flex: {
        flex: 0.5
    },
    buttonContainer: {
        margin: '25%',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
   }
})
export default Other_report