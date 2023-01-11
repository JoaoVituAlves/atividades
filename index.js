import express from 'express';

function processarCadastro(req,resp)
{
    const dados = req.body;
    const cnpj= dados.cnpj;
    const nome= dados.nome; 
    const razao= dados.razao;
    const endereco=dados.endereco;
    const cidade= dados.cidade;
    const estado= dados.estado;
    const cep=dados.cep;
    const email=dados.email;
    const tel= dados.tel;

    if (cnpj && nome && razao && endereco && cidade && estado && cep && email && tel)
    {
        resp.write('<p>Empresa cadastrada com sucesso!</p>');
        resp.end();
    }
    else{
        resp.write("<!DOCTYPE html>");
        resp.write("<html>");
        resp.write("<head>");
        resp.write("<meta charset='utf-8'/>");
        resp.write("<title>Cadastro de empresa!</title>");
        resp.write("</head>");
        resp.write("<body>");
        resp.write("<form method='POST' action='/cadastroEmpresa'>");
        resp.write("<fieldset>");
        resp.write("<h1> Cadastre a sua empresa !!!<br><br>");
        resp.write("<label for='iCNPJ'>CNPJ:</label><br>");
        resp.write("<input type='text' id='iCNPJ' name='iCNPJ' value='" + cnpj + "'/><br>");
       
        if (!cnpj)
        {
            resp.write("<p style='color:red'>É obrigatório informar o CNPJ.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='nome'>Nome Fantasia:</label><br>");
        resp.write("<input type='text' id='nome' name='nome' value='" + nome + "'/>");
         if (!nome)
        {
            resp.write("<p style='color:red'>É obrigatório informar o nome fantasia.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='razao'>Razão Social:</label><br>");
        resp.write("<input type='text' id='razao' name='razao' value='" + razao + "'/>"); 
        if (!razao)
        {
            resp.write("<p style='color:red'>É obrigatório informar a Razão Social.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='endereco'>Endereço:</label><br>");
        resp.write("<input type='text' id='endereco' name='endereco' value='" + endereco + "'/>"); 
        if (!endereco)
        {
            resp.write("<p style='color:red'>É obrigatório informar o endereço.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='cidade'>Cidade:</label><br>");
        resp.write("<input type='text' id='cidade' name='cidade' value='" + cidade + "'/>"); 
        if (!cidade)
        {
            resp.write("<p style='color:red'>É obrigatório informar a cidade.</p>");
        }
        resp.write("<br/>");


        resp.write("<label for='estado'>UF:</label><br>");
        resp.write("<input type='text' id='estado' name='estado' value='" + estado + "'/>");
         if (!email)
        {
            resp.write("<p style='color:red'>É obrigatório informar o Estado.</p>");
        }
        resp.write("<br/>");

        
        resp.write("<label for='cep'>CEP:</label><br>");
        resp.write("<input type='text' id='cep' name='cep' value='" + cep + "'/>");
         if (!cep)
        {
            resp.write("<p style='color:red'>É obrigatório informar o cep.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='email'>Email:</label><br>");
        resp.write("<input type='email' id='email' name='email' value='" + email + "'/>");
         if (!email)
        {
            resp.write("<p style='color:red'>É obrigatório informar o email.</p>");
        }
        resp.write("<br/>");

        resp.write("<label for='tel'>Telefone:</label><br>");
        resp.write("<input type='tel' id='tel' name='tel' value='" + tel + "'/>");
         if (!tel)
        {
            resp.write("<p style='color:red'>É obrigatório informar o telefone.</p>");
        }
        resp.write("<br/>");

        resp.write("<button type='submit'>Cadastrar</button>");
        resp.write("</fieldset>");
        resp.write("</form>");
        resp.write("</body>");
        resp.write("</html>");
    }

}

const servidor = express();
servidor.use(express.static('./paginas'));
servidor.use(express.urlencoded({extended:false}));
servidor.post('/cadastroEmpresa', processarCadastro);
servidor.listen(3000,'localhost');