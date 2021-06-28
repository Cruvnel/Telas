import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './signupredirectStyles';

function SignUpRedirectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardHeader}>O que você pretende?</Text>

        <View style={styles.buttonsGroup}>
          <TouchableOpacity 
            style={styles.workerButtonRedirect}
            onPress={() => navigation.navigate('CadastroPrestador')}
          >
            <Text style={styles.workerButtonRedirectText}>Prestar Serviços</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userButtonRedirect}
            onPress={() => navigation.navigate('CadastroConsumidor')}
          >
            <Text style={styles.userButtonRedirectText}>Consumir Serviços</Text>
          </TouchableOpacity>
        </View>        
      </View>
    </View>
  );
}

export default SignUpRedirectScreen;