import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './helpStyles';

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Como peço um novo serviço?',
    subcategory: [
      {id: 1, val: 'Para pedir um novo serviço, é necessário acessar a sessão "Novo Serviço" e preencher o formulário com as informações sobre o agendamento e o tipo de serviço desejado.'},
    ]
  },
  {
    isExpanded: false,
    category_name: 'Como mudar o horário do serviço?',
    subcategory: [
      {id: 2, val: 'Para mudar o horário/período em que o serviço será feito, basta ir na sessão "Serviços Agendados" selecionar o serviço desejado e alterar o período do serviço manualemnte.'}
    ]
  },

  {
    isExpanded: false,
    category_name: 'Como cancelar um serviço?',
    subcategory: [
      {id: 3, val: 'Para cancelar o serviço solicitado, vá até a sessão "Serviços Agendados". Selecione o serviço desejado e abaixo de "Alterar" você terá um botão de "Cancelar serviço".'}
    ]
  },

  {
    isExpanded: false,
    category_name: 'Como alterar meus dados pessoais?',
    subcategory: [
      {id: 4, val: 'Para mudar seus dados pessoais, basta ir na sessão "Conta" selecionar o campo desejado e alterá-lo. Ao final do processo clique em "Atualizar dados".'}
    ]
  },

];

const ExpandableComponent = ({item, onClickFunction}) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [flagDirection, setFlagDirection] = useState('chevron-down');

  useEffect(() => {
    if(item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded])

  return (
    <View>
      <TouchableOpacity
        style={styles.helpItem}
        onPress={onClickFunction}
      >
        <Text style={styles.itemText}>
          {item.category_name}
        </Text>
        <Ionicons name={'chevron-down'} size={23} color="#ffffff"></Ionicons>
      </TouchableOpacity>

      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden'
        }}
      >
        {
          item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.helpSolution}
            >
              <Text style={styles.helpSolutionText}>
                {item.val}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

function HelpScreen({ navigation }) {
  const [multiSelect, setMultiSelect] = useState(true);
  const [listDataSource, setListDataSource] = useState(CONTENT);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];

    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
        ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
        : (array[placeindex]['isExpanded']) = false
      );
    }
    setListDataSource(array)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Configuracoes')}
        >
          <Ionicons name="chevron-back" size={29} color="#52575D"></Ionicons>
        </TouchableOpacity>

        <Text style={styles.header}>Ajuda</Text>
      </View>

      <Text style={[styles.description, {marginBottom: 5}]}>Precisa de ajuda? Procure a solução em um dos tópicos abaixo.</Text>

      <ScrollView contentContainerStyle={{paddingBottom: 15}} showsVerticalScrollIndicator={false}>
        {
          listDataSource.map((item, key) => (
            <ExpandableComponent 
              key={item.category_name}
              item={item}
              onClickFunction={() => {
                updateLayout(key);
              }}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

export default HelpScreen;