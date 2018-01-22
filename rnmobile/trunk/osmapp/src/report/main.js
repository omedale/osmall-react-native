import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ReportView from './component/report'

export default class Report extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ReportView />
            </View>
        )
    }

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"rgb(255, 255, 255)" // #ffffff
    }
});
