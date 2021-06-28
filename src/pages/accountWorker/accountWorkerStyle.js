import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  signupScroll: {
    backgroundColor: '#fff',
    width: '100%'
  },

  titleBar: {
    marginTop: 44,
    marginHorizontal: 16,
    marginBottom: 30,

    flexDirection: 'row',
    alignItems: 'center'    
  },

  header: {
    marginLeft: 10,

    alignSelf: 'center',    

    fontSize: 30,
    fontWeight: '700'
  },

  description: {
    width: '90%',
    alignSelf: 'center',

    fontSize: 16
  },

  signupForm: {
    width: '80%',
    marginTop: 20,

    alignSelf: 'center'
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

  deleteAccount: {
    color: '#ff8787'
  },

  signupButtons: {
    marginTop: 30,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupButtonSubmit: {
    width: '100%',
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,

    backgroundColor: '#1C2945',
    borderRadius: 3,
    
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