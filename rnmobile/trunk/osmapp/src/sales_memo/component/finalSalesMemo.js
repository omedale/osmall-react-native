import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, TouchableOpacity } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from '../assets/styles';

class FinalSalesMemo extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Container style={{ padding: '4%' }}>
        <Content>
          <Row style={styles.memoSaleHeader}>
            <Text style={styles.memoHeaderText}>Sales Memo </Text>
          </Row>

          <Row style={styles.memoHeaderTwo}>
            <Text style={styles.memoHeaderTextTwo}>Intermedius OpenSupermall Sdn Bhd </Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              1144993-D</Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              A-2-6, Block A, Jalan 2/142A</Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              Megan phoenix</Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              Jalan Cheras</Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              GST No: 1234567890 </Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              24-Aug-2017 23:08 </Text>
          </Row>

          <Row style={styles.memoHeaderTwo}>
            <Text style={styles.memoHeaderText}>Tesco Extra Cheras </Text>
          </Row>

          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              G14A, Ground Floor, Jalan Midah 2
        </Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              Taman Midah, Batu 9 Cheras
            </Text>
          </Row>
          <Row style={styles.memoHeader}>
            <Text style={styles.memoHeaderTextThree}>
              56000 Kuala Lumpur
          </Text>
          </Row>

          <Row style={styles.memoHeaderTwo}>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree} >Sales Memo No:</Text>
            </Col>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree}>00000322</Text>
            </Col>
          </Row>

          <Row>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree} >Salesman ID:</Text>
            </Col>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree}>9808080</Text>
            </Col>
          </Row>

          <Row>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree} >Salesman:</Text>
            </Col>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree}>Peter Chan</Text>
            </Col>
          </Row>

          <Row>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree} >Fair Location:</Text>
            </Col>
            <Col style={styles.salesIdSection} size={50}>
              <Text style={styles.memoHeaderTextThree}>Tesco Extra Cheras </Text>
            </Col>
          </Row>

          <Grid style={styles.tableGrid}>
            <Row style={styles.tableRowBorderHeader}>
              <Col style={styles.tableHeaderWrapper} size={44} >
                <Text style={styles.tableHeader}>Description</Text>
              </Col>
              <Col style={styles.tableHeaderWrapper} size={10}>
                <Text style={styles.tableHeader}>Qty</Text>
              </Col>

              <Col style={styles.tableHeaderWrapper} size={23}>
                <Text style={styles.tableHeader}>Unit</Text>
              </Col>
              <Col style={styles.tableHeaderWrapper} size={23}>
                <Text style={styles.tableHeader}>Total</Text>
              </Col>
            </Row>

            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Vinnfier 303 2.0 USB Powered Speaker(Black/Blue)</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
            </Row>

            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Ka'fen Impression series</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
            </Row>

            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Vinnfier 303 2.0 USB Powered Speaker(Black/Blue)</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
            </Row>

            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Ka'fen Impression series</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
            </Row>

            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Ka'fen Impression series</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>118.00</Text>
              </Col>
            </Row>
            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColDesc} size={44} >
                <Text style={styles.tableRowText}>Vinnfier 303 2.0 USB Powered Speaker(Black/Blue)</Text>
              </Col>
              <Col style={styles.tableColQty} size={10}>
                <Text style={styles.tableRowText}>1</Text>
              </Col>

              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableRowText}>24.0</Text>
              </Col>
            </Row>


            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColUnit} size={77} >
                <Text style={styles.tableFooterText}>Total</Text>
              </Col>
              <Col style={styles.tableColUnit} size={23}>
                <Text style={styles.tableFooterText}>MYR 342.42</Text>
              </Col>
            </Row>
            <Row style={styles.tableRowBorder}>
              <Col style={styles.tableColUnit} size={77} >
                <Text style={styles.tableFooterText}>Total includes 6% GST MYR 19.41 </Text>
                <Text style={styles.tableFooterText}>Items Total MYR 342.42 </Text>
              </Col>
            </Row>

          </Grid>
          <Row style={styles.memoHeaderTwo}>
            <Col>
              <View style={styles.footer_button_wrapper}>
                <Button style={styles.btnPrint} bordered onPress={() => alert("Print")}><Text> Print </Text></Button>
              </View>
            </Col>
            <Col>
              <View style={styles.footer_button_wrapper}>
                <Button style={styles.btnDowload} bordered onPress={() => alert("Download")}><Text> Download </Text></Button>
              </View>
            </Col>
            <Col>
              <View style={styles.footer_button_wrapper}>
                <Button style={styles.btnVoid} bordered onPress={() => alert("Void")}><Text> Void </Text></Button>
              </View>
            </Col>
          </Row>
          <Row>
            <View>
              <Image style={styles.barcodeImage} source={require('../assets/img/barcode.png')}>
              </Image>
            </View>
          </Row>
          <Row style={{ marginTop: 4, justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <Image style={styles.qrImage} source={require('../assets/img/qr.png')}>
              </Image>
            </View>
          </Row>
        </Content>
      </Container>
    )
  }
}

export default FinalSalesMemo;