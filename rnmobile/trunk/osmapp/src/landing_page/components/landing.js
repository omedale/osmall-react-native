import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native';
import HeaderBar from './header';
import Products from './products';
export default class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    // componentDidMount() {
    //     /**
    //      * Fetch.
    //      * Neet to check on which route we need to get data.
    //      */
    //     const url = Config.server_base_url + "";
    //     console.log(url);
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then((response) => {
    //             console.log(response);
    //             const value = AsyncStorage.getItem('access_token')
    //             console.log(value);
    //         })
    //         .catch((error) => { console.log("An error occured: " + error) });
    // }
    render() {
        return (
            <View style={{flex : 1}}>
                <HeaderBar />
                <Products />
            </View>
        )
    }

}