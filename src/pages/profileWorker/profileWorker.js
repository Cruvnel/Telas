import React from 'react';
import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './profileWorkerStyles';

function ProfileWorkerScreen({ navigation }) {
  let service = {
    name: 'Diarista',
    serviceArea: 'Casa',
  };
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
            <Image source={require('../../img/defaultuserimage.png')} style={styles.image} resizeMode='cover'></Image>
          </View>

          {/* <View style={styles.directMessage}>
            <MaterialIcons name="chat" size={18} color="#FFFFFF"></MaterialIcons>
          </View> */}

          {/* <View style={styles.active}></View>  //----- Se precisar do item active ele já está pronto */} 
        </View>

        <View style={styles.infoContainer}>
          <View style={[styles.save, { backgroundColor: "#FFFFFF" }]}>
            <Ionicons name="today" size={35} color="#FFFFFF"></Ionicons>
          </View>

          <View>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Jenilda S.</Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 16, alignSelf: 'center' }]}>Diarista</Text>
          </View>          
          
          <TouchableOpacity
            style={styles.save}
            onPress={() => navigation.navigate('AgendamentoConsumidor1', {service})}
          >
            <Ionicons name="today" size={35} color="#FFFFFF"></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statsBox, { marginLeft: 0, borderColor: "#AEB5BC", borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>254</Text>
            <Text style={[styles.text, styles.subText]}>Serviços</Text>
          </View>

          <View style={[styles.statsBox, { borderColor: "#AEB5BC" }]}>
            <View style={styles.starRating}>
              <Text style={[styles.text, { fontSize: 30, marginRight: 3 }]}>4,5</Text>
              <FontAwesome name={'star'} color= '#1C2945' size={30} style={styles.starIcon}/>              
            </View>
          </View>

          <View style={[styles.statsBox, { borderColor: "#AEB5BC", borderLeftWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>R$ 90,00</Text>
            <Text style={[styles.text, styles.subText]}>por hora</Text>
          </View>
        </View>

        <View style={[styles.selfInfoContainer, { alignSelf: 'center', borderColor: "#AEB5BC", borderTopWidth: 1, borderBottomWidth: 1 }]}>
          <Text style={{ fontSize: 15, marginBottom: 3 }}>Jenilda Silva Barbosa</Text>

          <Text style={{ fontSize: 15, marginBottom: 3 }}>
            Reside em{" "}
            <Text style={{ fontSize: 15, fontWeight: '700' }}>
              São Paulo
            </Text>
          </Text>

          <Text style={styles.text, { fontSize: 15 }}>
            Atua em{" "}
            <Text style={{ fontSize: 15, fontWeight: '700' }}>
              Serviços domésticos
            </Text>
          </Text>
        </View>

        <View style={[styles.avaliationsContainer, { marginTop: 15 }]}>
          <View style={styles.avaliationsTitle}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Avaliações</Text>
          </View>

          <ScrollView style={{paddingLeft: 6}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.avaliationContainer}>
              <View style={styles.avaliationHeader}>
                <View style={styles.avaliationUserInfos}>
                  <Image source={require('../../img/defaultuserimage.png')} style={styles.avaliationaUserImage} resizeMode='cover'></Image>

                  <View style={styles.avaliationHeaderGroup}>
                    <Text style={styles.avaliationUserName}>Manoel Gomes</Text>
                    <Text style={styles.avaliationDate}>em 25/06/2021</Text>
                  </View>
                </View>

                <View style={styles.avaliationRating}>
                  <Text style={styles.avaliationRatingText}>5</Text>
                  <FontAwesome name={'star'} color= '#1C2945' size={20} /> 
                </View>
              </View>

              <View style={styles.avaliationComent}>
                <Text style={styles.avaliationComentText}>
                  Ela faz muito bem o seu trabalho, não demora, fica muito bem limpo, além de deixar tudo muito cheiroso e brilhando. 
                  Não tenho nada a reclamar!
                </Text>
              </View>
            </View>

            <View style={styles.avaliationContainer}>
              <View style={styles.avaliationHeader}>
                <View style={styles.avaliationUserInfos}>
                  <Image source={require('../../img/defaultuserimage.png')} style={styles.avaliationaUserImage} resizeMode='cover'></Image>

                  <View style={styles.avaliationHeaderGroup}>
                    <Text style={styles.avaliationUserName}>Renata Araújo</Text>
                    <Text style={styles.avaliationDate}>em 21/06/2021</Text>
                  </View>
                </View>

                <View style={styles.avaliationRating}>
                  <Text style={styles.avaliationRatingText}>5</Text>
                  <FontAwesome name={'star'} color= '#1C2945' size={20} /> 
                </View>
              </View>

              <View style={styles.avaliationComent}>
                <Text style={styles.avaliationComentText}>
                  A Jenilda é um amor, sempre que preciso de uma diarista chamo ela ❤️
                </Text>
              </View>
            </View>

            <View style={styles.avaliationContainer}>
              <View style={styles.avaliationHeader}>
                <View style={styles.avaliationUserInfos}>
                  <Image source={require('../../img/defaultuserimage.png')} style={styles.avaliationaUserImage} resizeMode='cover'></Image>

                  <View style={styles.avaliationHeaderGroup}>
                    <Text style={styles.avaliationUserName}>Manoel Gomes</Text>
                    <Text style={styles.avaliationDate}>em 25/06/2021</Text>
                  </View>
                </View>

                <View style={styles.avaliationRating}>
                  <Text style={styles.avaliationRatingText}>5</Text>
                  <FontAwesome name={'star'} color= '#1C2945' size={20} /> 
                </View>
              </View>

              <View style={styles.avaliationComent}>
                <Text style={styles.avaliationComentText}>
                  Sem palavras... Se estiver procurando alguém competente e está nesse perfil, você já achou. Pode contratar a Jenilda de olhos fechados 🤞🏾🤞🏾
                </Text>
              </View>
            </View>

            <View style={styles.avaliationContainer}>
              <View style={styles.avaliationHeader}>
                <View style={styles.avaliationUserInfos}>
                  <Image source={require('../../img/defaultuserimage.png')} style={styles.avaliationaUserImage} resizeMode='cover'></Image>

                  <View style={styles.avaliationHeaderGroup}>
                    <Text style={styles.avaliationUserName}>Manoel Gomes</Text>
                    <Text style={styles.avaliationDate}>em 25/06/2021</Text>
                  </View>
                </View>

                <View style={styles.avaliationRating}>
                  <Text style={styles.avaliationRatingText}>4</Text>
                  <FontAwesome name={'star'} color= '#1C2945' size={20} /> 
                </View>
              </View>

              <View style={styles.avaliationComent}>
                <Text style={styles.avaliationComentText}>
                  Só não dei 5 estrelas porque faltou limpar o banheiro kkk, mas de resto ficou impecável a limpeza 
                </Text>
              </View>
            </View>

            <View style={styles.avaliationContainer}>
              <View style={styles.avaliationHeader}>
                <View style={styles.avaliationUserInfos}>
                  <Image source={require('../../img/defaultuserimage.png')} style={styles.avaliationaUserImage} resizeMode='cover'></Image>

                  <View style={styles.avaliationHeaderGroup}>
                    <Text style={styles.avaliationUserName}>Manoel Gomes</Text>
                    <Text style={styles.avaliationDate}>em 25/06/2021</Text>
                  </View>
                </View>

                <View style={styles.avaliationRating}>
                  <Text style={styles.avaliationRatingText}>5</Text>
                  <FontAwesome name={'star'} color= '#1C2945' size={20} /> 
                </View>
              </View>

              <View style={styles.avaliationComent}>
                <Text style={styles.avaliationComentText}>
                  Quando a casa precisa de uma faxina não me vem nenhuma outra pessoa na mente que não seja a Jeni ☺️, sempre fez o trabalho muito bem feito, além 
                  de ser pontual, nunca se atrasou quando vinha trabalhar aqui em casa. Recomendo super!
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileWorkerScreen;