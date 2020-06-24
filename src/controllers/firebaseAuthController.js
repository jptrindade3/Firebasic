// Gerenciamento de usuários https://firebase.google.com/docs/auth/web/manage-users?hl=pt_br
// https://firebase.google.com/docs/reference/js/firebase.User#updateemail

const firebase = require('firebase');

module.exports = {
    signUp(req, res){
        let userData = req.body;

        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then((firebase) => {
            res.send(firebase.user);
        }).catch((error) => {
            console.log(error);
        });
    },

    login(req, res){
        let userData = req.body;

        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then((loggedIn) => {
            if(loggedIn){
                res.send({message: "Login feito com sucesso"});
                return res.json(loggedIn);
            }
        }).catch((error) => {
            // auth/wrong-password
            // auth/user-not-found
            // auth/network-request-failed
            res.send({errorType: error.code});
        });
    },

    logout(req, res){
        firebase.auth().signOut().then(() => {
            res.send({message: "Logout feito com sucesso"})
        }).catch((error) => {
            res.send({errorType: error.code});
        });
    },

    forgot(req, res){
        let emailAdress = req.body;
        
        firebase.auth().sendPasswordResetEmail(emailAdress.email).then(() =>{
            res.send({message: "Email de redefinição enviado com sucesso"});
        }).catch((error) => {
            // auth/user-not-found
            // auth/network-request-failed
            res.send({errorType: error.code});
        });
    },
};