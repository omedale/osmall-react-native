import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Content } from 'native-base';


class Discount extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.title}>Discount</Text>
        <Content style={{backgroundColor:'black'}}>
            <Image source={ require('./assets/img/banner1.jpg') } style={styles.imageStyle} resizeMode="contain" />
            <Image source={ require('./assets/img/banner2.jpg') } style={styles.imageStyle} resizeMode="contain" />
            <Image source={ require('./assets/img/banner1.jpg') } style={styles.imageStyle} resizeMode="contain" />
            <Image source={ require('./assets/img/banner2.jpg') } style={styles.imageStyle} resizeMode="contain" />
            <Image source={ require('./assets/img/banner1.jpg') } style={styles.imageStyle} resizeMode="contain" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black'
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
    color:"#34dabb"
  },
  imageStyle: {
    height: 100,
    width: null,
    flex: 1,
    marginBottom: 10
  }
});

export default Discount;
