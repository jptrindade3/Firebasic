const firebase = require('firebase');

module.exports = {
        //Essas funções dependem de o usuário já estar logado e não ter ficado muito tempo sem se logar
    async updateEmail(req, res){
            let user = await firebase.auth().currentUser;
            let newEmail = req.body;
    
            if(user){
                user.updateEmail(newEmail.email).then(() => {
                    res.send({message: "Email redefinido com sucesso"});
                }).catch((error) => {
                    res.send({errorType: error.code});
                });
            }
            else{
                res.send({message: "Usuário não logado"});
            }
        },
    
    async updatePassword(req, res){
            let user = await firebase.auth().currentUser;
            let newPassword = req.body;
    
            if(user){
                user.updatePassword(newPassword.password).then(() => {
                    res.send({message: "Senha redefinida com sucesso"});
                }).catch((error) => {
                    res.send({errorType: error.code});
                });
            }
            else{
                res.send({message: "Usuário não logado"});
            }
        },
    
    async deleteUser(req, res){
            let user = await firebase.auth().currentUser;
    
            if(user){
                user.delete().then(() => {
                    res.send({message: "Usuário deletado com sucesso"});
                }).catch((error) => {
                    res.send({errorType: error.code});
                });
            }
            else{
                res.send({message: "Usuário não logado"});
            }
        },
     
        //Caso o usuário esteja afk e garantir que ninguém mude a senha dele sem premissão, exigimos que ele logue de novo
    async reauthentication(req, res){
            let user = await firebase.auth().currentUser;
            let credentials = req.body;
    
            if(user){
                user.reauthenticateWithCredential(credentials).then(() => {
                    res.send({message: "Usuário reautenticado"});
                }).catch((error) => {
                    res.send({errorType: error.code});
                });
            }
            else{
                res.send({message: "Usuário não logado"});
            }
        },
};