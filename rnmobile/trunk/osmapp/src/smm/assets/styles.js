import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainTitleSection: {
    backgroundColor: '#fff',
    elevation: 1
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
    height: 200,
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
  cardImage: { flex: 1,justifyContent: 'center', alignItems: 'center' },
  buttonWrapper: {marginTop: '5%'},
  buttonHolder:  { flexDirection: 'row', justifyContent: 'space-between' },
  cardInfoButton: { width: '50%', backgroundColor: '#4aaee7',  justifyContent: 'center', alignItems: 'center', padding: 5 },
  cardSendButton: { width: '50%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }


});