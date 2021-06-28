import React from 'react';
import { Image, KeyboardAvoidingView, Platform, StatusBar, View, Text } from 'react-native';
import { RectButton, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
//import StackNavigation from './StackNavigation';

import LoginAuthentication from '../../services/loginalert'; // Importa a função que valida o Login

import globalStyles from '../../../assets/css/global';
import styles from './loginStyles';

function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={[globalStyles.container, styles.loginCard]}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View>
        <StatusBar barStyle="dark-content" />
        <Image style={styles.loginLogoImage} source={require('../../img/logo.png')} />
        <Text style={styles.loginWelcomeMessage} >Entre com seu login OwnOffice</Text>
      </View>

      {/*
      <View>
        <Text style={styles.loginErrorMessage}>E-mail ou senha inválido!</Text> //---- QUANDO A AUTENTICAÇÃO FALHAR ESTA MENSAGEM SERÁ EXIBIDA
      </View>
      */}

      <View style={styles.loginForm}>
        <TextInput style={styles.loginEmailInput} placeholder='E-mail' autoCapitalize={'none'} autoCompleteType={'off'} keyboardType={'email-address'} />
        <TextInput style={styles.loginPasswordInput} placeholder='Senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />

        <View style={styles.loginSignupRedirectMessage}>
          <Text style={styles.loginSignupRedirectText}>Não é cadastrado?</Text>
          <RectButton
            onPress={() => navigation.navigate('RedirecionarCadastro')}
          >
            <Text style={styles.loginSignupRedirectButton}>Faça seu cadastro</Text>
          </RectButton>
        </View>

        <RectButton
          style={styles.loginForgotPasswordButton}
          onPress={() => navigation.navigate('RecuperarSenha')}
        >
          <Text style={styles.loginForgotPasswordButtonText}>Esqueci minha senha</Text>
        </RectButton>

        <TouchableOpacity
          style={styles.loginButtonSubmit}
          /* onPress={LoginAuthentication} */ //---- ACIONA A FUNÇÃO PARA VALIDAR O LOGIN
          onPress={() => navigation.navigate('TabNav')}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;