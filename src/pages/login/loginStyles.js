import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginCard: {
    backgroundColor: '#fff',
  },

  loginLogoImage: {
    alignSelf: 'center',
    marginBottom: 20
  },

  loginWelcomeMessage: {
    fontSize: 19,
    marginBottom: 30
  },

  loginErrorMessage: {
    fontWeight:'bold',
    fontSize: 22,
    color: 'red',
    marginTop: 10,
    marginBottom: 15,
  },

  loginForm: {
    width: '80%'
  },

  loginEmailInput: {
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

  loginPasswordInput: {
    backgroundColor: '#ECF0F1',
    fontSize: 16,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 12,
    paddingRight: 9,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,

    marginBottom: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  loginSignupRedirectMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 27
  },

  loginSignupRedirectText: {
    fontSize: 15
  },

  loginSignupRedirectButton: {
    fontSize: 15,
    marginLeft: 4
  },

  loginForgotPasswordButton: {
    marginTop: 3,
    alignSelf: 'center'
  },

  loginForgotPasswordButtonText: {
    fontSize: 15,
  },

  loginButtonSubmit: {
    marginTop: 45,
    width: '60%',
    padding: 10,
    backgroundColor: '#1C2945',
    borderRadius: 20,

    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  loginButtonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  },

  img: {
    alignSelf: 'center',
  }
});

export default styles;