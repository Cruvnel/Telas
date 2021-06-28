import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signupCard: {
    flex: 1,
    backgroundColor: '#fff',
  },

  signupScroll: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
  
  signupLogoImage: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 107
  },

  signupHeaderMessage: {
    fontSize: 19,
    marginBottom: 30
  },

  signupForm: {
    width: '80%',
  },

  dataGroupLabel:{
    marginBottom: 10,

    fontSize: 17,
    color: '#bababa',
    fontWeight: '700'
  },

  signupInput: {
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

  signupDescriptionInput: {
    backgroundColor: '#ECF0F1',
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

  signupDescriptionInputText: {
    fontSize: 16,
  },

  signupButtons: {
    marginTop: 20,
    marginBottom: 107,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  signupButton: {
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

  signupButtonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  },
});

export default styles;