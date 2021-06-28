import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './ratingStyles';

function RatingScreen({ navigation }) {  
  const [defaultRating,setDefaultRating] = useState(1);
  const [maxRating,setMaxRating] = useState([1,2,3,4,5]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Avaliacoes')}
        >
          <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.header}>Avaliação</Text>
      </View>

      {/* <Text style={styles.description}>Avalie o serviço de Gabriel.</Text> */}

      <View style={styles.starRating}>
        <Text style={styles.starRatingHeader}>Dê uma nota para o serviço:</Text>
       
        <View style={styles.customRatingBar}>
          {
            maxRating.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setDefaultRating(item)}
                >
                  <FontAwesome 
                    name={
                      item <= defaultRating
                      ? 'star'
                      : 'star-o'
                    }
                    color= '#1C2945'
                    size={52}
                    style={styles.starIcon}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>

        <TextInput
          style={styles.contactusTextAreaInput}
          placeholder='Deixe um comentário sobre o serviço' 
          keyboardType={'default'}
          multiline={true}
          maxLength={300}
          numberOfLines={8} // Comando funciona somente no Android
        />
     
      </View>


      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Avaliacoes')}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabNav')}
        >
          <Text style={styles.buttonText}>Concluído</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default RatingScreen;