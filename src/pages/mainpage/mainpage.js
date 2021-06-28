import React from 'react';
import { Image, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import styles from './mainpageStyles';

const announcements = [
  require('../../img/banner1.png'),
  require('../../img/banner2.png'),
]

function MainPageScreen({ navigation }) {
  state = {
    active: 0
  }

  let [fontsLoaded] = useFonts({
    'Constantine': require('../../../assets/fonts/Constantine.ttf'),
  });

  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

    if(slide !== this.state.active){
      () => this.setState({active: slide});
    }
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <Text style={{ fontSize: 35, fontWeight: '600' }}>Carregando</Text>
        <Ionicons name="build" color='#FFFFFF' size={30} />
      </View>
    )
  } else {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="list" color='#1C2945' size={35} /> 

        <Text style={[styles.headerName, {fontFamily: 'Constantine'}]}>OwnOffice</Text>
        
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate('Configuracoes')}
        >
          <Ionicons name="settings" color='#FFFFFF' size={30} />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <ScrollView 
            pagingEnabled 
            horizontal 
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainer}>
            {
              announcements.map((announcement, index) => (
                <Image key={index} source={ announcement } style={styles.announcement}  />
              )) 
            }
          </ScrollView>
          <View style={styles.carouselIndicator}>
            {
              announcements.map((i, index) => (
                <Text 
                  key={index} 
                  style={
                    index==this.state.active ? 
                    styles.carouselActiveIndicatorIcon : 
                    styles.carouselIndicatorIcon
                  }
                >
                  ⬤
                </Text>
              ))
            }
          </View>
        </View>

        <View style={styles.frequentServicesContainer}>
          <Text style={styles.frequentServicesHeader}>Frequentemente pedidos</Text>

          <View style={styles.frequentServicesCardGroup}>
            <TouchableOpacity
              style={styles.frequentServicesCard}
              onPress={() => navigation.navigate('TelaPerfilPrestador')}
            >
              <Text style={styles.frequentServicesCardText}>Diarista</Text>
              <Ionicons name="chevron-forward-outline" color='#FFFFFF' size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.frequentServicesCard}
              onPress={() => navigation.navigate('AgendamentoConsumidor')}
            >
              <Text style={styles.frequentServicesCardText}>Marceneiro</Text>
              <Ionicons name="chevron-forward-outline" color='#FFFFFF' size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.frequentServicesCard}
              onPress={() => navigation.navigate('AgendamentoConsumidor')}
            >
              <Text style={styles.frequentServicesCardText}>Babá</Text>
              <Ionicons name="chevron-forward-outline" color='#FFFFFF' size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.frequentServicesCard}
              onPress={() => navigation.navigate('AgendamentoConsumidor')}
            >
              <Text style={styles.frequentServicesCardText}>Encanador</Text>
              <Ionicons name="chevron-forward-outline" color='#FFFFFF' size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.frequentServicesCard}
              onPress={() => navigation.navigate('AgendamentoConsumidor')}
            >
              <Text style={styles.frequentServicesCardText}>Eletricista</Text>
              <Ionicons name="chevron-forward-outline" color='#FFFFFF' size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.highlightsContainer}>
          <View style={styles.highlightsContainerHeader}>
            <Ionicons name="trophy" color='#FFFFFF' size={25} />
            <Text style={styles.highlightsContainerHeaderText}>Destaques Semanais</Text>
            <Ionicons name="trophy" color='#FFFFFF' size={25} />
          </View>

          <View style={styles.highlightsContainerContent}>
            <TouchableOpacity
              style={[styles.highlightWorker, {marginBottom: 13, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e6e6e633'}]}
              onPress={() => navigation.navigate('Perfil')}
            >
              <View style={styles.workerInfos}>
                <Image source={require('../../img/defaultuserimage.png')} style={styles.workerPicture} resizeMode="contain" />
                <Text style={styles.firstWorkerName}>Gabriel Gustavo</Text>
              </View>

              <Ionicons name="ribbon" color='#FFD700' size={35} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.highlightWorker, {marginBottom: 13, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e6e6e633'}]}
              onPress={() => navigation.navigate('Perfil')}
            >
              <View style={styles.workerInfos}>
                <Image source={require('../../img/defaultuserimage.png')} style={styles.workerPicture} resizeMode="contain" />
                <Text style={styles.firstWorkerName}>Fabricio Souza</Text>
              </View>

              <Ionicons name="ribbon" color='#C0C0C0' size={35} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.highlightWorker}
              onPress={() => navigation.navigate('Perfil')}
            >
              <View style={styles.workerInfos}>
                <Image source={require('../../img/defaultuserimage.png')} style={styles.workerPicture} resizeMode="contain" />
                <Text style={styles.firstWorkerName}>João Carlos</Text>
              </View>

              <Ionicons name="ribbon" color='#CD7F32' size={35} />
            </TouchableOpacity>
          </View>

          <View style={styles.highlightsContainerFooter}>
            <Text style={styles.highlightsContainerFooterText}>Atualizado em 14/05/2021</Text>
            <Ionicons name="time" color='#FFFFFF' size={18} />
          </View>
        </View>

        <View style={styles.adsSpace}>
          <Image source={require("../../img/ads1.png")} style={styles.adsSpaceImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
}

export default MainPageScreen;