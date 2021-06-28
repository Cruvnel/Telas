import { Alert } from "react-native";

const LoginAuthentication = () => {
  Alert.alert(
    "E-mail ou Senha inválido!",
    "Por favor insira e-mail ou a senha novamente."
  );
}
  
export default LoginAuthentication;
