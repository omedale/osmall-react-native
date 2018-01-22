import React, { Component } from 'react'


import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
// import {Container, Content } from 'native-base'
const {width , height } = Dimensions.get('window');
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            price : "MYR " + 1000,
        }
    }
    render() {
        return (
            // <Content style={{flex:1}}>
                <View style={styles.products_container} >
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                    <View style={styles.products_row}>
                        <Image  source={require("../assets/item.jpg")} style={styles.product_logo} />

                        <View style={styles.item_price}>
                            <Text style={styles.price}>{this.state.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.item_detail}>{"Plantronics M70 Mobile Bluetooth"}</Text>
                        </View>
                    </View>
                </View>
            // </Content>
        );
    }

}
const styles = StyleSheet.create({
    products_container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'white'
    },
    products_row: {
        alignItems: 'center',
        width: width/2,
        height : height/2.9,
        justifyContent : 'center',
    },
    product_logo: {
        resizeMode: "contain",
        width: width/3.8,
    },
    item_price: {
        backgroundColor: 'rgba(105, 105, 104,0.7)', // #929292
        zIndex: 9999,
        width: width/2.9,
        bottom: 50,
        paddingVertical : 10,
        paddingHorizontal : 10,
    },
    price: {
        color: 'rgb(255, 255, 255)', // #ffffff
        textAlign : 'center'
    },
    item_detail: {
        fontSize: 16,
        bottom: 40,
        color: 'rgb(146, 146, 146)', // #929292
        marginLeft:20,
        marginTop:20,
        marginRight:8
    }
});