import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './schedulinguserStyles';

function SchedulingUserScreen1({ navigation, route }) {
  const service = route.params;

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={[styles.titleBar]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TelaPrincipal')}
          >
            <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
          </TouchableOpacity>

          <Text style={styles.schedulingHeader}>Agendamento</Text>
          
        </View>

        <Text style={styles.schedulingDescription}>Aqui você poderá dizer o serviço que está procurando e para quando precisa.</Text>

        <View style={[styles.schedulingForm, {marginTop: 30}]}>
          <View>
            <Text style={styles.schedulingLabel}>O que você precisa?</Text>
            <TextInput style={[styles.schedulingInput, {marginBottom: 25}]} placeholder="Descreva o serviço" value={service.service.name} autoCapitalize={'sentences'} keyboardType={'default'} />

            <Text style={styles.schedulingLabel}>Em qual área?</Text>
            <TextInput style={[styles.schedulingInput, {marginBottom: 25}]} placeholder='Escolha a área' value={service.service.serviceArea} autoCapitalize={'sentences'} keyboardType={'default'} />

            <Text style={styles.schedulingLabel}>Para quando?</Text>
            <TextInput style={[styles.schedulingInput, {marginBottom: 25}]} placeholder='Selecione uma data' autoCapitalize={'none'} keyboardType={'default'} />

            <Text style={styles.schedulingLabel}>Escolha o período?</Text>
            <TextInput style={styles.schedulingInput} placeholder='Manhã / Tarde' autoCapitalize={'none'} keyboardType={'default'} />
          </View>            
          
          <TouchableOpacity
            style={styles.schedulingButton1}
            onPress={() => navigation.navigate('TabNav')}
          >
            <Text style={styles.schedulingButtonText}>Finalizar agendamento</Text>
          </TouchableOpacity>
        </View>         
      </ScrollView>   
    </KeyboardAvoidingView>  
  );
}

export default SchedulingUserScreen1;