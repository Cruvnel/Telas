import React from 'react';
import { KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './accountStyle';

function AccountUserScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.titleBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
        >
          <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.accountHeader}>Conta</Text>
      </View>

      <Text style={styles.description}>Altere aqui os dados da sua conta.</Text>

      <View style={styles.signupForm}>
        <TextInput style={styles.signupNameInput} placeholder='Nome completo' autoCapitalize={'words'} autoCompleteType={'name'} keyboardType={'default'} />
        <TextInput style={styles.signupEmailInput} placeholder='E-mail' autoCapitalize={'none'} autoCompleteType={'email'} keyboardType={'email-address'} />
        <TextInput style={styles.signupPasswordInput} placeholder='Nova senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />
        <TextInput style={styles.signupConfirmPasswordInput} placeholder='Confirme sua nova senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />
        <TextInput style={styles.signupCity} placeholder='Atualizar cidade' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />

        <TouchableOpacity
          style={{ width: '100%', alignItems: 'flex-end' }}
          onPress={() => navigation.navigate('TelaDeLogin')}
        >
          <Text style={styles.deleteAccount}>Excluir conta</Text>
        </TouchableOpacity>        

        <View style={styles.signupButtons}>
          <TouchableOpacity 
            style={styles.signupButtonSubmit}
            onPress={() => navigation.navigate('Configuracoes')}
          >
            <Text style={styles.signupButtonText}>Atualizar dados</Text>
          </TouchableOpacity>
        </View>  
      </View>

    </KeyboardAvoidingView>
  );
}

export default AccountUserScreen;