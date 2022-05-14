## Nosso cdn 0800

## Integrando com STRAPI:
- yarn add @strapi/provider-upload-cloudinary or npm install @strapi/provider-upload-cloudinary --save
- crie um arquivo chamado plugins.js em /config do strapi
- cole o seguinte: https://github.com/strapi/strapi/tree/master/packages/providers/upload-cloudinary#provider-configuration 

- configure as variáveis .env (CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET)
- vá em /config/middlewares e troque o 'strapi::security' pelo objeto: https://github.com/strapi/strapi/tree/master/packages/providers/upload-cloudinary#security-middleware-configuration

## Teste fazendo upload no strapi!
- Vá em media library
- Faça upload de alguma imagem
- O resultado será +- = https://res.cloudinary.com/dzno9pfjs/image/upload/v1652494563/200_a8e1633ede.jpg?updated_at=2022-05-14T02:16:07.924Z
- E irá sincronizar diretamente no cloudinary em media library