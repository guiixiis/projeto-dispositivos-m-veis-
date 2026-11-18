# André Lanches – App Mobile (React Native + Expo)

Adaptação mobile do site estático "André Lanches" usando React Native e Expo.

## Estrutura
```
App.jsx                       # raiz: estado da tela ativa, SafeAreaView
src/theme.js                  # cores e telefone
src/data/produtos.js          # cardápio
src/components/Header.jsx
src/components/BannerPromocao.jsx
src/components/ListaProdutos.jsx
src/components/SobreNos.jsx
src/components/Contato.jsx
src/components/EntregaFlutuante.jsx
assets/images/                # imagens do site original
```

## Como rodar
```bash
npm install
npx expo start
```
Escaneie o QR Code com o app **Expo Go**.

## Publicação (EAS Update)
```bash
npm install -g eas-cli
eas login
eas init
eas update --branch main --message "André Lanches v1"
```

## Telefone de teste
Definido em `src/theme.js` (`TELEFONE_TEL`). Troque pelo número real.
