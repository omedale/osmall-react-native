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
import logo from '../assets/images/img1.jpg';
import styles from '../assets/styles';

class mainLayout extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const data = Array.apply(null, { length: 20 }).map(Number.call, Number);


    this.state = {
      showDetails: false,
      dataSource: ds.cloneWithRows(data),
    }

    this.render = this.render.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ showDetails: visible });
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
                <Image source={require('../assets/images/img1.jpg')} style={styles.cardImage} />
                <View style={styles.buttonWrapper}>
                  <View style={styles.buttonHolder}>

                    <TouchableOpacity onPress={() => {
                      this.setModalVisible(!this.state.showDetails)
                    }} style={styles.cardInfoButton}><Text style={{ color: '#fff', fontSize: 18 }}>Info</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cardSendButton}><Text style={{ color: '#fff', fontSize: 18 }}>Send</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          }
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={showDetails}
          onRequestClose={() => { this.setModalVisible(false) }}
          style={{ flex: 1 }}
        >
          <Container>
            <Content>
              <Card>
                <CardItem cardBody>
                  <Image source={require('../assets/images/img1.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
              </Card>
              <List>
                <ListItem icon>
                  <Body>
                    <Text>Product Name</Text>
                  </Body>
                  <Right>
                    <Text>Plantronic BlackBeat White</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Body>
                    <Text>Product Id</Text>
                  </Body>
                  <Right>
                    <Text>09372873237</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Body>
                    <Text>Shared</Text>
                  </Body>
                  <Right>
                    <Text>3</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Body>
                    <Text>Clicked</Text>
                  </Body>
                  <Right>
                    <Text>3</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Body>
                    <Text>Sales</Text>
                  </Body>
                  <Right>
                    <Text>Point 0,0</Text>
                  </Right>
                </ListItem>
                <ListItem icon>
                  <Body>
                    <Text>Price Per Unit</Text>
                  </Body>
                  <Right>
                    <Text>38943</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        </Modal>
      </View>
    );
  }
}

export default mainLayout;