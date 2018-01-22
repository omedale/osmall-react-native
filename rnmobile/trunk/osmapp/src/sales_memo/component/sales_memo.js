import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Picker, Button } from 'native-base'

class SalesMemoPage extends Component {

    constructor() {
        super();
        this.companies = [{ label: 'Company1', value: 'Company1' }, { label: 'Company2', value: 'Company2' }, { label: 'Company3', value: 'Company3' }]
        this.functions = [{ label: 'Stock Take-Report', value: 'Stock Take-Report' }, { label: 'Sales Memo', value: 'Sales Memo' }, { label: 'Fair Mode', value: 'Fair Mode' }, { label: 'Product ID vs Barcode Scanner', value: 'Product ID vs Barcode Scanner' }, { label: 'Delivery Man', value: 'Delivery Man' }, { label: 'Warehouse Scanner', value: 'Warehouse Scanner' }]
        this.months = [{ label: 'Jan', value: '0' }, { label: 'Feb', value: '1' }, { label: 'March', value: '2' }, { label: 'April', value: '3' }, { label: 'May', value: '4' }, { label: 'June', value: '5' }, { label: 'July', value: '6' }, { label: 'Aug', value: '7' }, { label: 'Sep', value: '8' }, { label: 'Oct', value: '9' }, { label: 'Nov', value: '10' }, { label: 'Dec', value: '11' }]
        this.years = [{ label: '2016', value: 2016 }, { label: '2017', value: 2017 }]
        this.locations = [{ label: 'Location 1', value: 'location1' }, { label: 'Location 2', value: 'location2' }]
        this.first_six_month = this.months.slice(0, 6);
        this.last_six_month = this.months.slice(6, 12);
        this.date = new Date();
        this.current_month = this.date.getMonth();
        this.state = {
            location: null,
            company: null,
            value: null,
            year: null
        }
    }

    changeValue = (value, itemIndex) => {
        this.setState({ year: value })
    }
    render() {
        const { year } = this.state;
        const current_year = this.date.getFullYear();
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Staff Page </Text>
                <View>
                    <Text style={styles.title}> Company </Text>
                    <Picker
                        selectedValue={this.state.company}
                        onValueChange={(itemValue, itemIndex) => this.setState({ company: itemValue })}>
                        {this.companies.map((company, index) => <Picker.Item key={index} label={company.label} value={company.value} />)}
                    </Picker>
                </View>
                <View>
                    <Text style={styles.title}> Function </Text>
                    <Picker style={{ borderWidth: 2 }}
                        selectedValue={this.state.function}
                        onValueChange={(itemValue, itemIndex) => this.setState({ value: itemValue })}>
                        {this.functions.map((func, index) => <Picker.Item key={index} label={func.label} value={func.value} />)}
                    </Picker>
                </View>
                <View>
                    <Text style={styles.sub_heading}> Sales Memo </Text>
                    <Text style={styles.title}> Location </Text>
                    <Picker style={{ borderWidth: 2 }}
                        selectedValue={this.state.location}
                        onValueChange={(location, itemIndex) => this.setState({ location })}>
                        {this.locations.map((location, index) => <Picker.Item key={index} label={location.label} value={location.value} />)}
                    </Picker>
                </View>
                <View style={styles.button_wrapper}>
                    <Button bordered style={styles.btn} onPress={() => alert("Sales memo")}><Text style={styles.text}> Sales Memo </Text></Button>
                </View>
                <View>
                    <Picker style={{ borderWidth: 2 }}
                        selectedValue={this.state.year}
                        onValueChange={(value, itemIndex) => this.changeValue(value, itemIndex)}>
                        {this.years.map((year, index) => <Picker.Item key={index} label={year.label} value={year.value} />)}
                    </Picker>
                </View>
                <View style={styles.monts_wrapper}>
                    <View style={styles.button_wrapper}>
                        {this.first_six_month.map((item, index) => (current_year !== year || (this.current_month >= item.value && current_year == year)) ? <Button key={index} bordered style={styles.month_button}
                            onPress={() => alert("month")}><Text style={styles.month_text}> {item.label} </Text></Button> : <Button key={index} disabled bordered style={styles.disable_month_button}
                                onPress={() => alert("month")}><Text style={styles.disable_month_text}> {item.label} </Text></Button>
                        )}
                    </View>
                    <View style={styles.button_wrapper}>
                        {this.last_six_month.map((item, index) => (current_year !== year || (this.current_month >= item.value && current_year == year)) ? <Button key={index} bordered style={styles.month_button}
                            onPress={() => alert("month")}><Text style={styles.month_text}> {item.label} </Text></Button> : <Button key={index} disabled bordered style={styles.disable_month_button}
                                onPress={() => alert("month")}><Text style={styles.disable_month_text}> {item.label} </Text></Button>

                        )}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        padding: 10
    },
    sub_heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    title_report: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 7,
        marginTop: 17
    },
    button_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        flex: 0.9,
        justifyContent: 'center',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'rgb(11, 122, 255)'
    },
    text: {
        fontSize: 16,
        color: 'rgb(76, 157, 255)',
        fontWeight: 'bold'
    },
    monts_wrapper: {
        padding:10
    },
    month_text: {
        color: 'rgb(11, 122, 255)'
    },
    dissable_month_text: {
        color: 'rgb( 0, 0, 0)'
    },
    month_button: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'rgb(11, 122, 255)'
    },
    disable_month_button: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 1,
        borderWidth: 1,
    },
    disable_month_text: {
        color: 'rgb(0, 0, 0)'
    }
});

export default SalesMemoPage;