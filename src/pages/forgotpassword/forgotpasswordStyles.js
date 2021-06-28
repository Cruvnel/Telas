import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff'
  },

  forgotPasswordCard: {
    width: '80%'
  },

  forgotPasswordLogoImage: {
    alignSelf: 'center',
    marginBottom: 20
  },

  forgotPasswordHeader: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 21,
  },

  forgotPasswordSubtitle: {
    textAlign: 'center',
    marginBottom: 55,
    fontSize: 16,
  },

  forgotPasswordEmailInput: {
    width: '100%',
    backgroundColor: '#ECF0F1',
    fontSize: 16,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    marginBottom: 25,

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

  forgotPasswordCodeInput: {
    width: 155,
    backgroundColor: '#ECF0F1',
    fontSize: 30,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,
    marginBottom: 75,

    alignSelf: 'center',

    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  forgotPasswordButtons: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  forgotPasswordBackButton: {
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

  forgotPasswordButtonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  },

  forgotPasswordButtonSubmit: {
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
  }

});

export default styles;