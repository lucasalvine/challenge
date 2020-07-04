![donus](./donus.jpg)
# Donus Challenge

## :coffee: Requisitos do teste


### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [postgres](https://www.postgresql.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Estrutura de pastas

```
src                 # Código da aplicação
├─ app              # Arquivos necessário no projeto
├── controllers     # 
├── models          # 
├── services        # 
├── repositories    # 
├── helpers         # 
├─ config           # 
├─ database         # 
├─ app.js           # 
├─ routes.js        # 
├─ server.js        # 
├─ __test__         # 
```

### Instruções para rodar a API

```
# Pré requisitos para rodar a aplicação
$ Ter o Docker e docker-compose configurado na maquina.
$ Altere o .env do projeto caso seja necessário.

# Clonando o repositório
$ git clone https://github.com/lucasalvine/donus-challenge.git

# Navegando para a pasta do projeto
$ cd donus-challenge

# Rodar o docker
$ docker-compose up -d

# APLICAÇÃO EXECUTANDO
```

### Sobre as rotas criadas

POST http://localhost:3000/movies - rota que vai salvar o filme no banco de dados.

GET http://localhost:3000/movies?censorship=true - rota que faz a busca do filme passando a censura (true - para censurado / false - para não censurado).

### Executando os testes da API localmente

Quando a aplicação estiver executando, abra o aplicativo que você mais utiliza para testar requisições, sugiro o Postman ou Insomnia.
Execute as rotas que foram detalhadas acima. 
- No caso do POST passar um objeto no formato JSON:

```javascript
{
	"movieName":"Movie One",
	"releaseDate": 19202012,
	"censorship": false,
	"director": "lucas",
	"casting": ["lucas", "joao", "maria", "pedro", "paulo", "beatriz", "diego", "maysa", "eder", "gustavo"]
}
```
- No caso do GET 

### Thats it ! :coffee:
---
by Lucas Cunha

