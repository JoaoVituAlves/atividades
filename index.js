import express from 'express';

const porta = 3000;
const app = express(); 

function processarRequisicao(req, resp){
    resp.write("<p> Raiz da aplicação <p>");
    resp.end();}
function processarBoasVindas(req, resp){
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
        resp.setHeader('Content-Type', 'text/html');
        resp.write('<html>');
        resp.write('<head>');
        resp.write('<meta charset = "UTF-8"/>');
        resp.write('<title>Resposta Produzida pelo servidor</title>');
        resp.write('</head>');
        resp.write('<body>');
        resp.write('<p> <strong> Ola, obrigado por acessar o seu servidor!!!</strong> </p>');
        if (nome && sobrenome){
            resp.write("<p> Seja bem vindo <strong>" + nome + " " + sobrenome +  " visualize os seguintes numeros ...</strong></p>");
            resp.write("<p> <strong> Tabuada do numero 3 ... </strong></p>");}
            resp.write("</body>");
            resp.write("</html>");
            resp.end();}
function processaCadastroCliente(req,resp){
    const nome=req.query.nome;
    const sobrenome= req.query.sobrenome;
    const endereco= req.query.endereco;
    const cidade= req.query.cidade;
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<meta charset = "UTF-8"/>');
    resp.write('<title> Cadastrado com sucesso</title>');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<p> <strong> O cliente ' + nome + ' foi cadastrado com sucesso! </strong> </p>');
    resp.write('<p> Sobrenome:' + sobrenome + '</p>');
    resp.write('<p> Endereço:' + endereco + '</p>');
    resp.write('<p> Cidade:' + cidade + '</p>');
    resp.end();}
app.get("/", processarRequisicao)
app.get("/boasvindas", processarBoasVindas)
app.use(express.static('./paginas'));
app.get("/cadastrarcliente", processaCadastroCliente);
app.listen(porta, 'localhost',() =>{
    console.log('Servidor escutando em http://localhost:3000/');})


