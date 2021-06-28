import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './accountWorkerStyle';

function AccountWorkerScreen({ navigation }) {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.signupScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TabNav')}
          >
            <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
          </TouchableOpacity>

          <Text style={styles.header}>Configurações</Text>
        </View>

        <Text style={styles.description}>Altere aqui os dados da sua conta.</Text>

        <View style={styles.signupForm}>
          <Text style={styles.dataGroupLabel}>Dados da Conta</Text>
          <TextInput style={styles.signupInput} placeholder='E-mail' autoCapitalize={'none'} autoCompleteType={'email'} keyboardType={'email-address'} />
          <TextInput style={styles.signupInput} placeholder='Senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />
          <TextInput style={[styles.signupInput, {marginBottom: 40}]} placeholder='Confirme sua senha' autoCapitalize={'none'} autoCompleteType={'off'} secureTextEntry={true} />

          <Text style={styles.dataGroupLabel}>Dados Pessoais</Text>
          <TextInput style={styles.signupInput} placeholder='Nome completo' autoCapitalize={'words'} autoCompleteType={'name'} />        
          <TextInput style={styles.signupInput} placeholder='CPF' autoCapitalize={'none'} autoCompleteType={'off'} keyboardType={'numeric'} />
          <TextInput style={styles.signupInput} placeholder='Data de nascimento' autoCapitalize={'none'} autoCompleteType={'off'} keyboardType={'numeric'} />
          <TextInput style={[styles.signupInput, {marginBottom: 40}]} placeholder='Endereço' autoCapitalize={'words'} autoCompleteType={'street-address'} />

          <Text style={styles.dataGroupLabel}>Dados Profissionais</Text>
          <TextInput style={styles.signupInput} placeholder='Nível de escolaridade' autoCapitalize={'characters'} autoCompleteType={'off'} />
          <TextInput style={styles.signupInput} placeholder='Área de formação' autoCapitalize={'characters'} autoCompleteType={'off'} />
          <TextInput style={styles.signupInput} placeholder='Referência de Trabalho' autoCapitalize={'none'} autoCompleteType={'off'} />
          <TextInput style={[styles.signupInput, {marginBottom: 40}]} placeholder='CNPJ' autoCapitalize={'none'} autoCompleteType={'off'} keyboardType={'numeric'} />

          <Text style={styles.dataGroupLabel}>Dados de Serviço</Text>
          <TextInput style={styles.signupInput} placeholder='Área de atuação' autoCapitalize={'characters'} autoCompleteType={'off'} />
          <TextInput style={styles.signupInput} placeholder='Tipo de serviço' autoCapitalize={'words'} autoCompleteType={'off'} />
          <View style={styles.signupDescriptionInput}>
            <TextInput style={styles.signupDescriptionInputText} placeholder='Descrição do Serviço' autoCapitalize={'none'} autoCompleteType={'off'} />
          </View>

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default AccountWorkerScreen;