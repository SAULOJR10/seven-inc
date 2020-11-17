/////////////////////////Configuração///////////////////////
Primeiramente para rodar a aplicação será necessário installar o node.js e o mongodb em sua maquina
obs: configurações de conexões do mongodb devem seguir o arquivo database dentro de config

posteriormento instale o nodemon e inicialize um servidor para escultar as requisições HTTP

-no prompt de comando execulte o seguinte comando:
	npm install -g nodemon

-depois use 'cd' para navegar até o diretorio raiz da api_rest

-no diretorio raiz execulte o seguinte comando:
	nodemon bin/www

-minimize o terminal e comece os testes

/////////////////////////////Testes//////////////////////
Utilizando a extensão do Chrome 'Postman' podem fazer os testes de acordo com as seguintes instruções:

Para listar todos os funcionarios:
use o protocolo HTTP GET e a rota 'localhost:8080/users'

Para buscar funcionario por id:
use o protocolo HTTP GET e a rota 'localhost:8080/users/"ID QUE PROCURA"(sem aspas)'

Para inserir funcionario:
use o protocolo HTTP POST e a rota 'localhost:8080/users' e passe como parametros:
{
"name": "NOME",
"bornDate": "YYYY-MM-DD",
"salary": 3000,
"position": "CARGO"
}

para editar um funcionário:
use o protocolo HTTP PUT pela rota 'localhost:8080/users' e passe como parametros:
{
"id": "ID DE QUEM QUER EDITAR"
"name": "NOME",
"bornDate": "YYYY-MM-DD",
"salary": 3000,
"position": "CARGO"
}

para excluir um funcionario:
use o protocolo HTTP DELETE pela rota 'localhost:8080/users/"ID QUE QUER EXCLUIR"(sem aspas)

///////////////////////ROTA DE ESCAPE//////////////////
Se por algum motivo não estiverem conseguindo configurar a API estarei com as portas do meu computador abertas, só pedirem meu ip publico que passo na hora e podem testar dai, usando o meu computador como servidor