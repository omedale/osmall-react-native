import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  item_container: {
     flex: 1,
  },
  product_container: {
     flex: 1,
     backgroundColor: 'whitesmoke',
     margin: 15,
     marginLeft: 0,
     marginRight: 35,
     borderRadius: 3,
     borderWidth: 1,
     borderColor: '#D3D3D3' 
  },
  hyper_container: {
    flex:1,
    backgroundColor: 'white',
    borderColor: 'white',
    borderLeftWidth: 20,
    borderTopWidth: 5,

  },
  item_image: {
    flex: 1,
    margin: 15,
    marginTop: 0,
  },
  item_info: {
    flex: 1,
    marginLeft: 15,
  },
  item_price_quantity: {
    flexDirection:'row'
  },
  line: {
    marginBottom: 3,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  Hyper_header: {
    marginBottom: 10,
    color: 'black',
    fontWeight: '200',
    fontSize: 35,
  },
  item_name:{
    color: 'black',
    fontWeight: '200',
    fontSize: 22,
  },
  time_left: {
    backgroundColor: 'wheat',
    fontWeight: '200',
    fontSize: 12,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
  number_bordered: {
    paddingLeft: 3,
    paddingRight: 2,
    color: 'black',
    borderWidth: 1,
    marginLeft: 2,
    marginRight: 2,
    borderColor: 'black'
  },
  Item_description: {
  },
  cancel_text : {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: 'red',
    textAlignVertical: 'center'
  }, 
  terms_and_conditions: {
    alignSelf: 'center',
    color: 'blue',
    marginTop: 20,
  }
})
export default styles