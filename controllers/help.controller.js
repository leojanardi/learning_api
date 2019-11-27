const config = require('../config/config');
const jwt = require('jsonwebtoken');

const helpData = [
    { UserId: 1, Title: 'Xpto 1', Description: 'Lorem ipsum dollor donet', 
        Answer: [
            { UserId: 2, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 3, Description: 'Lorem donet ipsum dollor ipsum dollor' }
        ] },
    { UserId: 1, Title: 'Xpto 2', Description: 'Lorem dollor donet',
        Answer: [
            { UserId: 2, Description: 'Lorem donet ipsum dollor ipsum dollor' }
        ] },
    { UserId: 1, Title: 'Xpto 3', Description: 'Lorem donet', 
        Answer: [
            { UserId: 2, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 3, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 4, Description: 'Lorem donet ipsum dollor ipsum dollor' }
        ] },
    { UserId: 2, Title: 'Xpto 4', Description: 'Lorem ipsum dollor ipsum dollor' ,
        Answer: [
            { UserId: 1, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 2, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 3, Description: 'Lorem donet ipsum dollor ipsum dollor' }
        ] },
    { UserId: 3, Title: 'Xpto 5', Description: 'Donet ipsum dollor',
        Answer: [
            { UserId: 2, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 3, Description: 'Lorem donet ipsum dollor ipsum dollor' },
            { UserId: 4, Description: 'Lorem donet ipsum dollor ipsum dollor' }
        ] },
    { UserId: 3, Title: 'Xpto 6', Description: 'Lorem donet ipsum dollor ipsum dollor', 
        Answer: [
            { UserId: 2, Description: '' }
        ] },
    { UserId: 4, Title: 'Xpto 6', Description: 'Lorem donet ipsum dollor donet ipsum',
        Answer: [
        ] },
    { UserId: 4, Title: 'Xpto 7', Description: 'Lorem donet ipsum dollor donet dollor',
        Answer: [
        ] },
    { UserId: 4, Title: 'Xpto 8', Description: 'Lorem donet ipsum dollor lorem ipsum',
        Answer: [
        ] },
]
    
exports.list = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rocketseat-hack'];
        let userId = req['query'].data;

        console.log("(helpController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.log(err);
                    console.error("(helpController)   [ Erro ao validar o token... ]");
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {
                    // Aplica regra de negocio  
                    // decoded
                    console.log("(helpController)   [ Token Valido! ]");

                    // retornar tema e desafio 
                    res.status(200).json({
                        success: true,
                        data: helpData.filter(x => x.UserId == userId),
                        message: 'Dados retornados com sucesso'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(helpController)   [ Token nao Informado! ]")
            return res.status(401).json({
                success: false,
                data: helpData,
                message: 'Token não foi passado na request'
            });
        }       
    }
    catch(err)
    {
        res.status(400).json(err);
    }    
}

exports.ask = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rocketseat-hack'];
        let data = req['body'];

        console.log("(helpController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.log(err);
                    console.error("(helpController)   [ Erro ao validar o token... ]");
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded
                    console.log("(helpController)   [ Token Valido! ]");
                    console.log(req);

                    // atualizar helpers
                    helpData.push(data);
                    console.log("(helpController)   [ Lista Atualizada! ]");

                    // retorno
                    res.status(200).json({
                        success: true,
                        data: helpData,
                        message: 'Ajuda requisitada com sucesso!'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(helpController)   [ Token nao Informado! ]")
            return res.status(401).json({
                success: false,
                message: 'Token não foi passado na request'
            });
        }       
    }
    catch(err)
    {
        res.status(400).json(err);
    }    
}