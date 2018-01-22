import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FinalSalesMemo from './component/finalSalesMemo';
import styles from './assets/styles';
import Header from '../landing_page/components/header';

class SalesMemo extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <FinalSalesMemo />
            </View>
        )
    }
}

export default SalesMemo;