import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  cardContainer: {
    width: '90%',
    height: '45%',
    
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  cardHeader: {
    fontSize: 27,
  },

  buttonsGroup: {
    width: '90%',

    flexDirection: 'column',
    alignItems: 'center',

  },  

  workerButtonRedirect: {
    width: 300,
    height: 70,
    padding: 9,
    marginBottom: 15,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1C2945',

    borderRadius: 7    
  },

  workerButtonRedirectText: {
    color: '#ffffff',
    fontSize: 24
  },

  userButtonRedirect: {
    width: 300,
    height: 70,
    padding: 9,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1C2945',

    borderRadius: 7  
  },

  userButtonRedirectText: {
    color: '#ffffff',
    fontSize: 24
  },
});

export default styles;