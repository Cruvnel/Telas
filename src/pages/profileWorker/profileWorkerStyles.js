import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  text: {
    fontFamily: "HelveticaNeue",
  },

  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },

  image: {  
    flex: 1,
    width: undefined,
    height: undefined
  },

  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },

  directMessage: {
    backgroundColor: "#41444B", // Mudar para as cores da OwnOffice?
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    
    height: 20,
    width: 20,
    borderRadius: 10
  },

  starRating:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 16,
  },

  save: {
    backgroundColor: "#41444B", // Mudar para as cores da OwnOffice?
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  statsContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 32,
    flexDirection: 'row'
  },

  statsBox: {
    alignItems: 'center',
    flex: 1
  },

  selfInfoContainer:{
    marginTop: 20,
    width: '94%',
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },

  avaliationsContainer: {
    // Se houver a necessidade de editar o container de Avaliações, basta utilizar este campo
  },

  avaliationsTitle: {
    marginLeft: 16,
    marginBottom: 11
  },

  avaliationContainer: {
    width: 280,
    height: 200,
    padding: 13,
    marginBottom: 15,

    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#f2f2f2',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  avaliationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avaliationUserInfos: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avaliationaUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
  },

  avaliationHeaderGroup: {
    marginLeft: 5,
  },

  avaliationUserName: {
    fontSize: 15
  },

  avaliationDate: {
    fontSize: 10
  },

  avaliationRating: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  avaliationRatingText: {
    marginRight: 3,
    fontSize: 16
  },

  avaliationComent: {
    flex: 1,
    padding: 5,
    marginTop: 10,

    backgroundColor: '#fff',
    borderRadius: 5
  },

  avaliationComentText: {
    color: '#6e6e6e'
  },
});

export default styles;