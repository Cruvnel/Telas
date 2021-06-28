import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Platform, StatusBar, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import globalStyles from '../../../assets/css/global';
import styles from './contactusStyles';

function ContactUsScreen({ navigation }) {
  

  return (
    <KeyboardAvoidingView 
      style={[globalStyles.container,styles.contactusBackground]}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.contactusHeaderMessage} >Deseja reportar algum problema?</Text>
      </View>

      <View style={styles.contactusForm}>
        <TextInput style={styles.contactusEmailInput} placeholder='E-mail' autoCapitalize={'none'} autoCompleteType={'email'} keyboardType={'email-address'} />
        <View style={styles.contactusTextAreaInput}>
          <TextInput
            placeholder='Descreva seu problema' 
            keyboardType={'default'}
            multiline={false}
            maxLength={300}
            numberOfLines={8} // Comando funciona somente no Android
          />
        </View>
        
        <View style={styles.contactusButtons}>
          <TouchableOpacity 
            style={styles.contactusButtonBack}
            onPress={() => navigation.navigate('Configuracoes')}
          >
            <Text style={styles.contactusButtonText}>Voltar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.contactusButtonSubmit}
            onPress={() => navigation.navigate('TelaPrincipal')}
          >
            <Text style={styles.contactusButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>  
      </View>

    </KeyboardAvoidingView>
  );
}

export default ContactUsScreen;