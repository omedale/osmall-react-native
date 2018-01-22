import React, { Component } from 'react';
import {
  Modal, TouchableHighlight, View, TouchableOpacity, StyleSheet,
  Image, ListView, Alert, StatusBar
} from 'react-native';
import {
  Container, Header, Content, Card, Title,
  CardItem, Thumbnail, Text, Button, Icon,
  Left, Body, Right,
  List, ListItem, Switch
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../assets/styles';

class OpenWishView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const data = Array.apply(null, { length: 20 }).map(Number.call, Number);


    this.state = {
      showDetails: false,
      dataSource: ds.cloneWithRows(data),
    }

    this.render = this.render.bind(this);
  }

  render() {
    const { showDetails } = this.state;

    return (
      <View>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View elevation={5} style={styles.item} >
              <View style={styles.card}>
                <Image source={require('../assets/img/2.png')} style={styles.cardImage} />
                <View style={styles.titlePointHolder}>
                  <View style={styles.productTitle}>
                    <View>
                      <Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>Product title </Text>
                    </View>
                  </View>
                  <View style={styles.productPoint}>
                    <View>
                      <Text style={{ fontWeight: 'bold' }}> 6.00 Pts.</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonWrapper}>
                  <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.buttonBoost}><Text style={{ color: 'black', fontSize: 18 }}>BOOST</Text></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.titlePointHolder}>
                  <View style={styles.productTitle}>
                    <View>
                      <Text style={{ marginLeft: '5%', fontWeight: 'bold'  }}>Accumulated </Text>
                    </View>
                  </View>
                  <View style={styles.productPoint}>
                    <View>
                      <Text style={{ fontWeight: 'bold' }}> 6.00 Pts.</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonWrapperBuy}>
                  <View style={styles.buttonHolder}>
                    <TouchableOpacity style={styles.buttonBuy}><Text style={{ color: '#fff', fontSize: 18 }}>BUY</Text></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.titlePointHolder}>
                <View style={styles.productTitle}>
                  <View>
                    <Text style={{ marginLeft: '5%', fontWeight: 'bold'  }}>Balance </Text>
                  </View>
                </View>
                <View style={styles.productPoint}>
                  <View>
                    <Text style={{ fontWeight: 'bold' }}> 39.00 Pts.</Text>
                  </View>
                </View>
              </View>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

export default OpenWishView;