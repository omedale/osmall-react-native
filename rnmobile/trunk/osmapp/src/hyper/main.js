import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Item from './components/item.js';
import styles from './styles.js'
import Line from './components/line.js'

class Hyper extends Component {
  render() {
    return (
      <View style={styles.hyper_container}>
        <Text style={styles.Hyper_header}>
          Hyper
        </Text>
        <Line/>
        <Item/>
      </View>  
    );
  }
}

export default Hyper