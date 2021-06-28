import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import styles from './forgotpasswordStyles';

function ForgotPasswordScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={styles.forgotPasswordContainer}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.forgotPasswordCard}>
      <View>
        <Image style={styles.forgotPasswordLogoImage} source={require('../../img/logo.png')} />
        <Text style={styles.forgotPasswordHeader}>Esqueceu sua Senha?</Text>
        <Text style={styles.forgotPasswordSubtitle}>Insira seu e-mail e receba o código de redefinição de senha pelo e-mail</Text>
      </View>


        <TextInput 
          style={styles.forgotPasswordEmailInput} 
          placeholder='E-mail para recuperação' 
          autoCapitalize={'none'} 
          autoCompleteType={'off'} 
          keyboardType={'email-address'} 
        />

        <TextInput 
          style={styles.forgotPasswordCodeInput} 
          placeholder='_ _ _ _ _ _' 
          textAlign={'center'}
          maxLength={6}
          autoCapitalize={'characters'} 
          autoCompleteType={'off'} 
          keyboardType={'default'} 
        />  

        <View style={styles.forgotPasswordButtons}>
          <TouchableOpacity
            style={styles.forgotPasswordBackButton}
            onPress={() => navigation.navigate('TelaDeLogin')}
          >
            <Text style={styles.forgotPasswordButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotPasswordButtonSubmit}
            onPress={() => navigation.navigate('TelaDeLogin')}
          >
            <Text style={styles.forgotPasswordButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ForgotPasswordScreen;