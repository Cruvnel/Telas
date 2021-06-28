import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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

  servicesList: {
    width: '90%',
    marginTop: 15,
    marginBottom: 10,

    alignSelf: 'center',   
  },

  serviceCardContainer: {
    paddingTop: 8,
    paddingRight: 18,
    paddingBottom: 8,
    paddingLeft: 12,
    marginBottom: 11,

    backgroundColor: '#ECF0F1',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  serviceInfos: {
    flex: 1,
    paddingRight: 20
  },

  serviceHeader: {    
    fontSize: 18,
    fontWeight: '600',
  },

  serviceContractor: {
    marginBottom: 1,
    fontWeight: '500',
  },

  serviceDateTimeInfos: {
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  serviceDate: {
    fontWeight: '500',
  },

  serviceTime: {
    fontWeight: '500',
  },

  serviceValue: {
    fontWeight: '500',
  },

  seeMoreIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  seeMoreIcon: {
    paddingTop: 2,
    paddingRight: 11,
    paddingBottom: 5,
    paddingLeft: 11,
    alignItems: 'center',

    backgroundColor: '#d4d8d9',
    borderRadius: 4
  },

  seeMoreIconText: {
    marginTop: -5,
 
    color: '#52575D',
    fontWeight: '600',
  },

  noServiceMessageContainer: {
    height: '82%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noServiceMessage: {
    fontSize: 19,
    color: '#949494'
  }
});

export default styles;