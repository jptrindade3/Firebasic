const express = require('express');
const firebaseAuthController = require('./controllers/firebaseAuthController');
const firebaseUserController = require('./controllers/firebaseUserController');

const routes = express.Router(); //Desacopla o modulo de rotas do express

/*
Métodos HTTP
*GET -> Buscar uma informação no back
*POST -> Criar uma informação no back
*PUT -> Alterar uma informação no back
*DELETE -> Deletar uma informação no back
*/

routes.post('/signUp', firebaseAuthController.signUp);
routes.post('/login', firebaseAuthController.login);
routes.post('/logout', firebaseAuthController.logout);
routes.post('/forgot', firebaseAuthController.forgot);
routes.post('/emailVerification', firebaseAuthController.emailVerification);
routes.post('/updateEmail', firebaseUserController.updateEmail);
routes.post('/updatePassword', firebaseUserController.updatePassword);
routes.post('/deleteUser', firebaseUserController.deleteUser);
routes.post('/reauthentication', firebaseUserController.reauthentication);

module.exports = routes;