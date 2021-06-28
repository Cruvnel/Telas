import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },

  header: {
    width: '100%',
    paddingTop: 9,
    paddingRight: 12,
    paddingBottom: 9,
    paddingLeft: 12,

    backgroundColor: '#1C2945',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerName: {
    color: '#FFFFFF',
    fontSize: 32,
  },

  imageLogo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginLeft: -5,
  },

  carouselContainer: {
    width, 
    height: 200
  },

  announcement: {
    width, 
    height: 200, 
    resizeMode: 'cover'
  },

  carouselIndicator: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 2, 
    alignSelf: 'center',
  },

  carouselIndicatorIcon: {
    color: '#888888'
  },

  carouselActiveIndicatorIcon: {
    color: '#FFFFFF'
  },

  frequentServicesContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center'
  },

  frequentServicesHeader: {
    marginBottom: 8,

    fontSize: 23,
    fontWeight: '700'
  },

  frequentServicesCardGroup: {
    // Se necessitar estilização, deverá ser colocada aqui!!
  },

  frequentServicesCard: {
    marginBottom: 10,
    paddingTop: 5,
    paddingRight: 8,
    paddingBottom: 5,
    paddingLeft: 8,
    height: 45,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    backgroundColor: '#495f8f',
    borderRadius: 5,
  },

  frequentServicesCardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF'
  },

  highlightsContainer: {
    marginBottom: 15,
    width: '90%',    

    //backgroundColor: '#ECF0F1',
    backgroundColor: '#495f8f',
    alignSelf: 'center',
    borderRadius: 5
  },

  highlightsContainerHeader: {
    flex: 1,
    paddingTop: 13,
    paddingRight: 10,
    paddingBottom: 13,
    paddingLeft: 10,
    backgroundColor: '#2d3a59',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },

  highlightsContainerHeaderText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FFFFFF'
  },

  highlightsContainerContent: {
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
  },

  highlightWorker: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between'
  },

  workerInfos: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  workerPicture: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },

  firstWorkerName: {
    fontSize: 22,
    color: '#FFFFFF'
  },

  highlightsContainerFooter: {
    flex: 1,
    padding: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#2d3a59',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },

  highlightsContainerFooterText: {
    marginRight: 5,
    color: '#FFFFFF'
  },

  adsSpace: {
    marginBottom: 5,
    width: 392,
    height: 392,
    alignSelf: 'center',
    
    backgroundColor: '#c2c2c2',
    alignItems: 'center',
    justifyContent: 'center'
  },

  adsSpaceImage: {
    width: 392,
    height: 392,
  },

  adsSpaceContent: {
    fontSize: 45,
    //fontWeight: '600'
  },

  marcation: {
    backgroundColor: '#992918',
    flex: 1,
    width: "1%",
    alignSelf: 'center'
  }
});

export default styles;