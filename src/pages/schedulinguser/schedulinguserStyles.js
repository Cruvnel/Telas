import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },

  schedulingFormContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  titleBar: {
    marginTop: 44,
    marginHorizontal: 16,
    marginBottom: 25,

    flexDirection: 'row',
    alignItems: 'center'    
  },

  schedulingHeader: {
    alignSelf: 'center',
    marginLeft: 10,

    fontSize: 30,
    fontWeight: '700'
  },

  schedulingDescription: {
    width: '80%',
    alignSelf: 'center',

    fontSize: 16
  },

  schedulingForm: {
    width: '80%',
    alignSelf: 'center'
  },

  schedulingLabel: {
    marginBottom: 10,

    fontSize: 17,
    color: '#787878',
    fontWeight: '700'
  },

  schedulingInput: {
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

  schedulingButton: {
    width: '80%',
    padding: 16,
    marginTop: 13,
    backgroundColor: '#1C2945',
    borderRadius: 7,

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

  schedulingButton1: {
    width: '75%',
    padding: 16,
    marginTop: 28,
    backgroundColor: '#1C2945',
    borderRadius: 7,
    

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

  schedulingButtonText: {
    fontSize: 19,
    color: '#FFF',
    alignSelf: 'center',
  },
});

export default styles;