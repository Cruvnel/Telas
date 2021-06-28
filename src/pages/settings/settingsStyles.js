import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },

  titleBar: {
    marginTop: 44,
    marginHorizontal: 16,
    marginBottom: 30,

    flexDirection: 'row',
    alignItems: 'center'    
  },

  settingsHeader: {
    marginLeft: 10,

    alignSelf: 'center',    

    fontSize: 30,
    fontWeight: '700'
  },

  settingsOptions: {
    height: '50%',
    width: '90%',

    alignSelf: 'center',
    justifyContent: 'space-around',
  },

  touchables: {
    marginBottom: 15,

    flexDirection: 'row',
    alignItems: 'center',   
  },

  touchableText: {
    marginLeft: 5,

    fontSize: 25,
  }

});

export default styles;