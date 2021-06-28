import React from 'react';
import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './profileStyles';

function ProfileScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TelaPrincipal')}
          >
            <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
          </TouchableOpacity>
            
          {/* <Ionicons name="brush" size={24} color="#52575D"></Ionicons> */}
        </View>

        <View style={{alignSelf: "center"}}>
          <View style={styles.profileImage}>
            <Image source={require('../../img/user.jpg')} style={styles.image} resizeMode='cover'></Image>
          </View>

          {/* <View style={styles.directMessage}>
            <MaterialIcons name="chat" size={18} color="#FFFFFF"></MaterialIcons>
          </View> */}

          {/* <View style={styles.active}></View>  //----- Se precisar do item active ele já está pronto */} 
          
          {/* <View style={styles.save}>
            <Ionicons name="logo-whatsapp" size={39} color="#FFFFFF" style={{ marginTop: 1, marginLeft: 2 }} ></Ionicons>
          </View> */}
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: "200", fontSize: 36 }]}>Gabriel G.</Text>
          {/* <Text style={[styles.text, { color: "#AEB5BC", fontSize: 16 }]}>Programador Front-End</Text> */}
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statsBox, { marginLeft: 0 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>14</Text>
            <Text style={[styles.text, styles.subText]}>Serviços pedidos</Text>
          </View>

          <View style={[styles.statsBox, { borderColor: "#AEB5BC", borderLeftWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>04/05/2021</Text>
            <Text style={[styles.text, styles.subText]}>Último serviço</Text>
          </View>
        </View>

        <View style={[styles.selfInfoContainer, { alignSelf: 'center', borderColor: "#AEB5BC", borderTopWidth: 1, borderBottomWidth: 1 }]}>
          <Text style={{ fontSize: 15, marginBottom: 3 }}>Gabriel Gustavo Araújo Tinoco</Text>

          <Text style={{ fontSize: 15, marginBottom: 3 }}>
            Reside em{" "}
            <Text style={{ fontSize: 15, fontWeight: '700' }}>
              São Paulo
            </Text>
          </Text>

          {/* <Text style={styles.text, { fontSize: 15 }}>
            Atua em{" "}
            <Text style={{ fontSize: 15, fontWeight: '700' }}>
              Desenvolvimento de sites
            </Text>
          </Text> */}
        </View>

        <View style={[styles.avaliationsContainer, { marginTop: 15 }]}>
          <View style={styles.avaliationsTitle}>
            {/* <Text style={{ fontSize: 20, fontWeight: '600' }}>Avaliações</Text> */}
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Postagens</Text>
          </View>

          <ScrollView style={{paddingLeft: 6}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              {/* <Image source={require("../../img/user2.jpg")} style={styles.image} resizeMode="cover"></Image> */}
            </View>
            <View style={styles.mediaImageContainer}>
              {/* <Image source={require("../../img/user2.jpg")} style={styles.image} resizeMode="cover"></Image> */}
            </View>
            <View style={styles.mediaImageContainer}>
              {/* <Image source={require("../../img/user2.jpg")} style={styles.image} resizeMode="cover"></Image> */}
            </View>
            <View style={styles.mediaImageContainer}>
              {/* <Image source={require("../../img/user2.jpg")} style={styles.image} resizeMode="cover"></Image> */}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;