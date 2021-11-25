module.exports = {

    user:(app, req, res) => {
        
        req.assert('name', 'O nome é obrigatório!').notEmpty();
        req.assert('email', 'O e-mail está inválido.').notEmpty().isEmail();
        req.assert('password', 'A senha é obrigatório!').notEmpty();

        let errors = req.validationErrors();

        if (errors){
            app.utils.error.send(errors, req, res);
            return false;
        }
        else {
            return true;
        }
    }
}