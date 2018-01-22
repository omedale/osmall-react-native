import { StyleSheet, Dimensions } from 'react-native';

const {width , height } = Dimensions.get('window');

export default StyleSheet.create({
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  tableRowText: {
    fontSize: 14,
    color: 'black',
  },
  tableRowTextDesc: {
    fontSize: 14,
    color: 'black',
    paddingRight: 2
  },
  tableHeaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableRowWrapper: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  tableRowBorder: {
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },
  tableRowBorderHeader: {
    borderWidth: 1,
    borderColor: 'black',
  },
  tableColDesc: {
   paddingRight: 2,
   paddingLeft: 2,
   borderWidth: 0.5,
   borderColor: 'black',
  },
  tableColUnit: {
    alignItems: 'flex-end',
    paddingRight: 2,
    paddingLeft: 2,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  tableColQty: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 1,
    paddingLeft: 1,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  tableFooterText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',  
  },
  memoHeaderText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  memoHeaderTextTwo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  memoHeaderTextThree: {
    fontSize: 18,
    color: 'black',
  },
  memoHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoHeaderTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  memoSaleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
  },
  memoTextWrapper: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  salesIdSection: {
    alignItems: 'flex-start',
  },
  tableGrid: {
    paddingTop: 12,
  },
  submitText: {
    color:'#fff',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 22,
},
button_wrapper: {
  flexDirection: 'row',
  justifyContent: 'center',
},
btnPrint: {
  flex: 0.9,
  justifyContent: 'center',
  backgroundColor: '#3565a4',
  borderRadius: 10,
  height: 120,
},
btnDowload: {
  flex: 0.9,
  justifyContent: 'center',
  backgroundColor: '#729fcf',
  borderRadius: 10,
  height: 120,
},
btnVoid: {
  flex: 0.9,
  justifyContent: 'center',
  backgroundColor: '#f33',
  borderRadius: 10,
  height: 120,
},
barcodeImage: {
  marginTop: -10,
  width: width - 30,
  height: 100,
},
qrImage: {
  width: 100,
  height: 100,
  marginLeft: 10
},
footer_button_wrapper: {
  height: 150,
  flexDirection: 'row',
  justifyContent: 'center',
}
});