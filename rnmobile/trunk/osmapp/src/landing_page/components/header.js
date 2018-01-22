import React, { Component } from 'react'
import { Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
const {width , height } = Dimensions.get('window');

export default class HeaderBar extends Component {
    constructor() {
        super();
        this.state = {
            header_text: "4,518.87 Pts"
        }
    }
    render() {
        return (

            <View style={ styles.header_container } >
                <Button transparent style={{alignSelf : 'center'}} onPress={ () => Actions.menu() }>
                    <Icon name="menu" style={styles.icon} />
                </Button>
                <View style={ styles.header_content }>
                    <Image source={require("../../login/assets/logo-white.png")} style={styles.logo} />
                    <Text style={styles.header_text}>{this.state.header_text}</Text>
                </View>
                <Button transparent style={{alignSelf : 'center'}}>
                    <Icon name="search" style={styles.icon} />
                </Button>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        height: height/11
    },
    icon: {
        color: 'white'
    },
    header_content: {
        flex: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        resizeMode: "contain",
        width: width/2.5
    },
    header_text: {
        color: 'rgb(104, 190, 179)' // #68BEB3
    }
});