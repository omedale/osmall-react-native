import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainLayout from './components/mainLayout';
import styles from './assets/styles';
import Header from '../landing_page/components/header';

class SMM extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header />
        <View style={styles.mainTitleSection}>
          <Text style={styles.mainHeader}>
            Social Media Marketers
          </Text>
        </View>
        <MainLayout />
      </View>
    )
  }
}

export default SMM;