import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './settingsStyles';

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
        >
          <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.settingsHeader}>Configurações</Text>
      </View>
      
      <View style={styles.settingsOptions}>     
        {/* <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate('TelaPerfil')}
        >
          <Ionicons name="person" size={29}></Ionicons>
          <Text style={styles.touchableText}>Editar perfil</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate('ContaUsuario')}
        >
          <Ionicons name="cog" size={29}></Ionicons>
          <Text style={styles.touchableText}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate('FaleConosco')}
        >
          <Ionicons name="megaphone" size={29}></Ionicons>
          <Text style={styles.touchableText}>Fale conosco</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigation.navigate('Ajuda')}
        >
          <Ionicons name="help-circle-outline" size={29}></Ionicons>
          <Text style={styles.touchableText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchables,{marginBottom: 0}]}
          onPress={() => navigation.navigate('TelaDeLogin')}
        >
          <Ionicons name="log-out" size={29}></Ionicons>
          <Text style={styles.touchableText}>Sair da conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingsScreen;