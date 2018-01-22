import React, { Component } from 'react';
import { Text, View,} from 'react-native';
import styles from '../styles.js'

const Item_PQ = ({name, quantity, price}) => (
  <View style={styles.item_price_quantity}>
    <View style={{flex:1, alignItems: 'flex-start'}}>
      <Text>{name}</Text>
    </View>
    <View style={{flex:1, alignItems: 'center'}}>
      <Text>{quantity}</Text>
    </View>
    <View style={{flex:1, alignItems: 'flex-end'}}>
      <Text>MYR {price}</Text>
    </View>
  </View>
    );

export default Item_PQ