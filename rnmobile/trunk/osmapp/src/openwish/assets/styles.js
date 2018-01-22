import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainTitleSection: {
    elevation: 1,
    marginLeft: '35%',
    marginRight: '35%',
  },
  mainHeader: {
    marginBottom: 10,
    color: 'black',
    fontWeight: '200',
    fontSize: 25,
    textAlign: 'center'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  item: {
    margin: 5,
    width: '47%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  historyItem: {
    margin: 5,
    width: '47%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  cardImage: { flex: 1, justifyContent: 'center', alignItems: 'center',  height: 200, width: null, },
  buttonWrapper: { flexDirection: 'row', marginTop: '-1%' },
  buttonWrapperBuy: { flexDirection: 'row', marginTop: '-1%' },
  titlePointWrapper: {},
  buttonHolder: { flex: 1 },
  titlePointHolder: { flexDirection: 'row' },
  productTitle: { width: '60%', backgroundColor: 'white' },
  productPoint: { width: '40%', backgroundColor: 'white' },
  buttonBoost: { backgroundColor: '#eaf215', justifyContent: 'center', alignItems: 'center', padding: 5 },
  buttonBuy: { backgroundColor: '#76ff00', justifyContent: 'center', alignItems: 'center', padding: 5 },
    
  productHistoryDesc: {
      color: 'white',
      textAlign : 'center',
      padding: 10
  },

  productHistoryDescContainer: {
    marginLeft: '25%',
    marginRight: '10%',
    backgroundColor: 'rgba(230, 15, 122, 0.61)',
    height: '40%',
    top: '20%',
  },

  imageContainer: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: null,
},
});