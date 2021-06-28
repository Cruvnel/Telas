import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import {
  MainPageScreen,
  ContactUsScreen,
  ProfileScreen,
  ProfileWorkerScreen,
  SchedulingUserScreen,
  SchedulingUserScreen1,
  RatingScheduling,
  RatingScreen,
  AllServicesScreen,
  SettingsScreen,
  HelpScreen
} from '../pages/index';

const Tab = createMaterialBottomTabNavigator();

/* const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 13,
        backgroundColor: '#432412',
        
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
) */

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="TelaPrincipal"
      inactiveColor= "rgba(255, 255, 255, 0.5)"
      activeColor="#FFFFFF"
    >
      <Tab.Screen 
        name="TelaPrincipal" 
        component={MainPageScreen} 
        options={{
          tabBarLabel: "Início",
          tabBarColor: '#1C2945', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={25} />
          )
        }} 
      />

      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: "Perfil",
          tabBarColor: '#1C2945',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={25} />
          )
        }}
      />

      <Tab.Screen 
        name="AgendamentoConsumidor" 
        component={SchedulingUserScreen}
        options={{
          tabBarLabel: "Agendar",
          tabBarColor: '#1C2945',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={25} />
          /* tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ) */
          )
        }} 
      />

      <Tab.Screen 
        name="TodosServicos" 
        component={AllServicesScreen} 
        options={{
          tabBarLabel: "Serviços",
          tabBarColor: '#1C2945',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={25} />
          )
        }}
      />
      
      <Tab.Screen 
        name="Avaliacoes" 
        component={RatingScheduling} 
        options={{
          tabBarLabel: "Avaliar",
          tabBarColor: '#1C2945',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;