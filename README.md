![donus](./donus.jpg)
# Donus Challenge

### :coffee: Requisitos do teste

O Donus Challenge, constitui em eleborar um sistema com duas rotas, sendo uma para salvar as informação no banco de dados (informações de um filme) e uma segunda rota, para fazer uma pesquisa, passando como parametro o tipo de censura do filme (neste caso, censurado, ou não - usei parametro boolean neste caso).

Além disso, o sistema tem uma lib de testes, para trazer mais certeza de que está tudo certo com o que foi desenvolvido.

Para os testes, foi eleborado um roteiro que é composto dos seguintes casos:
1 - Salvar os dados do filme corretos, com todos os campos - com sensura.
2 - Salvar os dados do filme corretos, com todos os campos - sem sensura.
3 - Tentar salvar o filme com o mesmo nome.
4 - Tentar salvar o filme com no máximo 10 atores.
5 - Tentar salvar o filme com mais de 11 atores.
6 - Fazer a busca por censura.
7 - Fazer a busca sem censura.

### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [postgres](https://www.postgresql.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jest](https://jestjs.io/)

### Estrutura de pastas

```
src                 # Código da aplicação
├─ __test__         # Arquivos de testes do sistema
├─ app              # Arquivos necessário no projeto
├── controllers     # Arquivo de controle do sistema
├── models          # Arquivo de modelos da base de dados usado 
├── services        # Arquivo de faz a interação entre o repositorio
├── repositories    # Arquivo que faz a interação com o banco de dados
├── helpers         # Arquivos de auxilio, no caso, as validações
├─ config           # Pasta de configuração do banco de dados
├─ database         # Pasta com os arquivos de migração
├─ app.js           # Classe inicial do sistema
├─ routes.js        # Classe de rotas
├─ server.js        # Classe que inicia o servidor
```

### Instruções para rodar a API

```
# Pré requisitos para rodar a aplicação
# Ter o Docker e docker-compose configurado na maquina.
$ Altere o .env do projeto, está como .env.example.

# Clonando o repositório
$ git clone https://github.com/lucasalvine/donus-challenge.git

# Navegando para a pasta do projeto
$ cd donus-challenge

# Rodar o docker
$ docker-compose up -d

# Rodar os testes
$ docker-compose exec app npm test

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
	"releaseDate": "2021-01-01",
	"censorship": false,
	"director": "lucas",
	"casting": ["lucas", "joao", "maria", "pedro", "paulo", "beatriz", "diego", "maysa", "eder", "gustavo"]
}
```

Em caso de utilização do Insomnia [Insomnia](https://insomnia.rest/), pode utilizar as rotas já pré criadas aqui :point_down:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Donus%20Challenge%20Routes&uri=https%3A%2F%2Fgithub.com%2Flucasalvine%2Fdonus-challenge%2Fblob%2Fmaster%2FInsomniaRoutes.json)
### Thats it ! :coffee:
---
by Lucas Cunha

