import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contactusBackground: {
    backgroundColor: '#FFF',
  },

  contactusHeaderMessage: {
    fontSize: 19,
    marginBottom: 30
  },

  contactusForm: {
    width: '80%',
  },

  contactusEmailInput: {
    backgroundColor: '#ECF0F1',
    fontSize: 16,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    marginBottom: 15,
  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  contactusTextAreaInput: {
    backgroundColor: '#ECF0F1',
    fontSize: 16,
    height: 168,

    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 10,
    marginBottom: 15,
  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  contactusButtons: {
    marginTop: 20,
    marginRight: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactusButtonSubmit: {
    width: 135,
    padding: 10,
    backgroundColor: '#1C2945',
    borderRadius: 20,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  contactusButtonBack: {
    width: 135,
    padding: 10,
    backgroundColor: '#1C2945',
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  contactusButtonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  },
});

export default styles;