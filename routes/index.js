module.exports = (app)=>{

    app.get('/', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<p><h1 style="color: #6B8E23;">Bem vindo. Sou o servidor deste site!<h1></p><p><h3 style="color: #000 ">Qualquer coisa, me chame :D</h3></p>')
    });    
};