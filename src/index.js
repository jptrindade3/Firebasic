const express = require('express');
const routes = require('./routes');
require('./firebase');//Conexão com o firebase

const app = express();//Chamando essa função, já temos o nosso app base criado
app.use(express.json());//Prepara a nossa API pra entender informações JSON
app.use(routes);//Link para o arquivo de rotas

app.listen(3333);//Define a porta utilizadad para acessar o back