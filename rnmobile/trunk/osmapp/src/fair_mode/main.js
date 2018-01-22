import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FairModePage from './component/fair_mode';
class FairMode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FairModePage />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)" // #ffffff
    }
});

export default FairMode;