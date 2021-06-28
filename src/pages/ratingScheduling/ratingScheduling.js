import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './ratingSchedulingStyles';

function RatingScheduling({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TelaPrincipal')}
          >
            <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
          </TouchableOpacity>

          <Text style={styles.header}>Avaliar</Text>
        </View>

        <Text style={styles.description}>Veja aqui todos os serviços que podem ser avaliados.</Text>

        <View style={styles.servicesList}>
          <View style={styles.serviceCardContainer}>
            <View style={styles.serviceInfos}>
              <Text style={styles.serviceHeader}>Serviço: Diarista</Text>
              <Text style={styles.serviceContractor}>Prestador(a): Jenilda Silva</Text>
              <View style={styles.serviceDateTimeInfos}>
                <Text style={styles.serviceDate}>Dia: 23/06</Text>
                <Text style={styles.serviceTime}>Período: Tarde</Text>
              </View>          
              <Text style={styles.serviceValue}>Valor: R$ 90,00</Text>
            </View>

            <View style={styles.seeMoreIconContainer}>
              <TouchableOpacity
                style={styles.seeMoreIcon}
                onPress={() => navigation.navigate('AvaliacaoServico')}
              >
                <Ionicons name="star" size={36} color="#52575D"></Ionicons>
                <Text style={styles.seeMoreIconText}>Avaliar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.noServiceMessageContainer}>
            <Text style={styles.noServiceMessage}>Por enquanto não há nenhum serviço finalizado para avaliar :)</Text>
          </View> */}

        </View>
      </ScrollView>
    </View>
  );
}

export default RatingScheduling;