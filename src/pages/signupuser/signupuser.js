import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

import globalStyles from '../../../assets/css/global';
import styles from './signupuserStyles';

function SignUpUserScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={[globalStyles.container, styles.signupCard]}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View>
        <Image style={styles.signupLogoImage} source={require('../../img/logo.png')} />
        <Text style={styles.signupHeaderMessage}>Faça seu cadastro na OwnOffice</Text>
      </View>

      <View style={styles.signupForm}>
        <TextInput style={styles.signupNameInput} placeholder='Nome completo' autoCapitalize={'words'} autoCompleteType={'name'} keyboardType={'default'} />
        <TextInput style={styles.signupEmailInput} placeholder='E-mail' autoCapitalize={'none'} autoCompleteType={'email'} keyboardType={'email-address'} />
        <TextInput style={styles.signupPasswordInput} placeholder='Senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />
        <TextInput style={styles.signupConfirmPasswordInput} placeholder='Confirme sua senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />
        <TextInput style={styles.signupCity} placeholder='Atualizar cidade' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />

        <View style={styles.signupButtons}>
          <TouchableOpacity 
            style={styles.signupButtonBack}
            onPress={() => navigation.navigate('RedirecionarCadastro')}
          >
            <Text style={styles.signupButtonText}>Voltar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.signupButtonSubmit}
            onPress={() => navigation.navigate('TelaDeLogin')}
          >
            <Text style={styles.signupButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>  
      </View>

    </KeyboardAvoidingView>
  );
}

export default SignUpUserScreen;