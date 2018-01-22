import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Item_PQ from './item_PQ.js'
import styles from '../styles.js'
import Line from './line.js'
class Item extends Component {
  render() {
    return (
      <View style={styles.item_container} >
        <Text style={styles.item_name} >
          Singlet and Top
        </Text>
        <View style={styles.product_container}>
          <Text style={styles.time_left}>
            Time left: 29 days 23hrs and 15 mins
          </Text>
          <Image
          style={styles.item_image}
          source={{uri:'https://opensupermall.com/images/product/486/p0000000486-m0000000109-6948.jpg'}}
          />
          <View  style={styles.item_info}>
            <View style={{flexDirection:'row',justifyContent: 'flex-end'}}>
              <Text>P</Text>
              <Text style={styles.number_bordered}>0</Text>
              <Text>Q</Text>
              <Text style={styles.number_bordered}>0</Text>
            </View>
            <Text tyle={styles.Item_description}>T-shirt</Text>
            <View style={{flexDirection:'row'}}>
              <Text>Price :MYR 20 MYR 50.0</Text>
              <Text style={styles.cancel_text}>MYR 50.0</Text>
            </View>
            <Line/>
            <Item_PQ name="MQQ" quantity="2" price= "40.00" />
            <Item_PQ name="MQQ/location" quantity="1" price= "20.00"/>
            <Line/>
            <Item_PQ name="Left" quantity="1" price= "40.00"/>
            <Line/>
            <Item_PQ name="Bought 0%" quantity="0" price= "0.00"/>
            <Text style={styles.terms_and_conditions}>Terms & conditions</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Item