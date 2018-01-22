import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Content, Form, Picker, Item as FormItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import OpenWishHistory from './components/openWishHistory';
import OpenWishView from './components/openWishView';
import styles from './assets/styles';
import Header from '../landing_page/components/header';
const Item = Picker.Item;

class OpenWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVal: "openWish",
      newView: false
    };

  }
  onValueChange(value) {
    this.setState({
      selectedVal: value
    });
  }

  to_openwish_history() {
    Actions.openwishhistory();
  }
  render() {
    if (this.state.selectedVal === 'History') {
      this.state.newView = true
    } else if (this.state.selectedVal === 'openWish') {
      this.state.newView = false
    } else {
      this.state.newView = false
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header />
        <View style={styles.mainTitleSection}>
            <Form>
              <Picker
                mode="dropdown"              
                selectedValue={this.state.selectedVal}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item itemStyle={{ fontWeight: 'bold' }} label="OpenWish" value="openWish" />
                <Item label="History" value="History" />
              </Picker>
            </Form>
        </View>
        { this.state.newView ? <OpenWishHistory /> : <OpenWishView /> }
      </View>
    )
  }
}

export default OpenWish;