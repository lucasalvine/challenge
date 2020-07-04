const { TestScheduler } = require("jest")
const nodemon = require("nodemon")

Casos de Testes

1 - Salvar os dados do filme corretos, com todos os campos - com sensura,
  2 - Salvar os dados do filme corretos, com todos os campos - sem sensura,
    3 - Tentar salvar o filme com o mesmo npme,
      4 - Tentar salvar o filme com no máximo 10 atores,
        5 - Tentar salvar o filme com mais de 11 atores,
          6 - Fazer a busca por censura,
            7 - Fazer a busca sem censura,
              8 - Fazer a busca onde não retorna nenhum resultado,