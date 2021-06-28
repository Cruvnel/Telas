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
    width: '90%',
    alignSelf: 'center',

    fontSize: 16
  },

  helpItem: {
    width: '95%',
    marginTop: 10,
    padding: 15,

    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#1C2945',
    borderRadius: 4,
  },

  itemText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ffffff',
  },

  helpSolution: {
    width: '95%',
    paddingLeft: 5,
    paddingRight: 5,

    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,

    alignSelf: 'center',
    backgroundColor: '#ECF0F1',
  },

  helpSolutionText: {
    fontSize: 16,
    padding: 10,
  }
});

export default styles;