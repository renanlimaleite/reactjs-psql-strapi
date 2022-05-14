## Primeiro comando com strapi ->
- npx create-strapi-app@latest my-project
- selecionar quickstart ou custom
- custom escolher entre (sqlite, psql, mysql)
- database name = elephatsql (User & Default database ex: aerthudj)
- host = Server elephantsql (Server ex: lblleh.db.elephantsql.com)
- port (default psql: 5432)
- username =  elephatsql (User & Default database ex: aerthudj)
- password = elephantsql (password field)
- enable ssl connect? Yes (y)

## Dentro do projeto strapi 
- acessar /config
- acessar o arquivo database.js
- recortar todos os dados sensíveis pro .env

## Possíveis errors:

### debug no_entry Server wasn't able to start properly. error error: too many connections for role "nftqiwzy"
- Significa que seu servidor está aceitando um limite máximo de conexão, defina um pool min e max em database.js
- pool: { min: 0, max: 5 }
- ele criará um jwt no seu .env automáticamente.
- rode novamente `yarn develop`
- então irá abrir o navegador localhost:1337 que você irá criar uma conta que será salva na sua database (no caso agora no elephantsql)

## Sobre o strapi:
- Content-Type Builder é basicamente criação de tabela, paginas no bd etc.