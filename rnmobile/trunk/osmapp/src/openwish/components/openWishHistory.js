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

class OpenWishHistory extends Component {
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
            <View elevation={5} style={styles.historyItem} >
              <View style={styles.card}>
                  <Image source={require('../assets/img/2.png')} style={styles.imageContainer}>
                    <View style={styles.productHistoryDescContainer}>
                      <Text style={styles.productHistoryDesc}>
                        Welcome to React Native!
                      </Text>
                    </View>
                  </Image>
                <View style={styles.titlePointHolder}>
                  <View style={styles.productTitle}>
                    <View>
                      <Text style={{  fontSize: 12, marginLeft: '5%' }}>history title </Text>
                    </View>
                  </View>
                  <View style={styles.productPoint}>
                    <View>
                      <Text style={{ fontSize: 12 }}>Points 6.00</Text>
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

export default OpenWishHistory;