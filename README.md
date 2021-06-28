<div align="center">
  <img src="https://user-images.githubusercontent.com/65090609/109902550-5e4e2a00-7c79-11eb-9bbc-3e33c43a351a.png" alt="OwnOffice Logo">
</div>

## COMO TESTAR NO MEU DISPOSITIVO?

- Para testar a plataforma OwnOffice no seu celular basta instalar o Expo através da sua loja de aplicativos;
- Pelo computador entre no diretório ``appmobile`` e instale as dependências do projeto rodando ```npm install```;
- Com as dependências baixadas (ignore os avisos), você precisará instalar a biblioteca do Expo, para isso utilize ```npm install expo``` (caso esteja utilizando o Yarn como gerenciador de pacotes use ```yarn add expo```);
- Após baixar o Expo, você terá que baixar as mesmas versões das bibliotecas utilizadas no projeto, rode o comando ```expo install react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens```;
- Com todas as bibliotecas e suas devidas versões instaladas rode ```expo start``` e aguarde o processo finalizar;
- Se tudo tiver corrido corretamente, aponte a camera do seu celular para o QRCode que apareceu e aguarde o MetroBundler montar o JavaScript da sua aplicação nativa!

## A APLICAÇÃO NÃO RODA NO SEU CELULAR?

- No seu computador vá em ``configurações de Rede e Internet``;
- Vá para a aba de ``Ethernet`` > ``Firewall``;
- Na aba de Firewall do Windows, desative o firewall de rede pública e deixe ativado somente o de rede privada;
- Feito isso, feche o servidor com ```CTRL+C```, rode ```expo start``` novamente que a aplicação irá funcionar normalmente.
