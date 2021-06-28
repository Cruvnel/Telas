import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';

import {
  LoginScreen,
  SignUpRedirectScreen,
  SignUpUserScreen,
  SignUpWorkerScreen,
  ForgotPasswordScreen,
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
  AccountUserScreen,
  AccountWorkerScreen,
  HelpScreen
} from '../pages/index';

function StackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TelaDeLogin" component={LoginScreen} />
      <Stack.Screen name="RedirecionarCadastro" component={SignUpRedirectScreen} />
      <Stack.Screen name="CadastroConsumidor" component={SignUpUserScreen} />
      <Stack.Screen name="CadastroPrestador" component={SignUpWorkerScreen} />
      <Stack.Screen name="RecuperarSenha" component={ForgotPasswordScreen} />
      <Stack.Screen name="TelaPrincipal" component={MainPageScreen} />
      <Stack.Screen name="FaleConosco" component={ContactUsScreen} />
      <Stack.Screen name="TelaPerfil" component={ProfileScreen} /> 
      <Stack.Screen name="TelaPerfilPrestador" component={ProfileWorkerScreen} /> 
      <Stack.Screen name="AgendamentoConsumidor" component={SchedulingUserScreen} />
      <Stack.Screen name="AgendamentoConsumidor1" component={SchedulingUserScreen1} />
      <Stack.Screen name="EscolherServicoAvaliacao" component={RatingScheduling} />
      <Stack.Screen name="AvaliacaoServico" component={RatingScreen} />
      <Stack.Screen name="TodosServicos" component={AllServicesScreen} />
      <Stack.Screen name="Configuracoes" component={SettingsScreen} />
      <Stack.Screen name="ContaUsuario" component={AccountUserScreen} />
      <Stack.Screen name="ContaPrestador" component={AccountWorkerScreen} />
      <Stack.Screen name="Ajuda" component={HelpScreen} />

      <Stack.Screen name="TabNav" component={BottomTabNavigation} />
    </Stack.Navigator>      
  );
}

export default StackNavigation;