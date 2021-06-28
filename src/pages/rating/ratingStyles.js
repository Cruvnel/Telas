import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
    width: '80%',
    alignSelf: 'center',

    fontSize: 16
  },

  starRating: {
    width: '80%',
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  starRatingHeader: {
    marginBottom: 10,

    fontSize: 19,
    fontWeight: '500'
  },

  customRatingBar: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

  starIcon: {
    marginHorizontal: 3,

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
    width: '100%',
    height: 168,
    marginTop: 55,
    backgroundColor: '#ECF0F1',
    fontSize: 16,

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

  buttonGroup: {
    flex: 1,

    width: '80%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },

  button: {
    marginBottom: 30,
    
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

  buttonText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  }
});

export default styles;