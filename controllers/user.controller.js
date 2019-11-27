const config = require('../config/config');
const jwt = require('jsonwebtoken');

const tema = [
    { UserId:1, Tema: 'C#', Desafio: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { UserId:2, Tema: 'C#', Desafio: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { UserId:3, Tema: 'C#', Desafio: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { UserId:4, Tema: 'C#', Desafio: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

const userData = [
    { UserId:1, Score:18, Team:5, Learn:25, ChallengesCompleted:8, HelpersActive:10 },
    { UserId:2, Score:20, Team:7, Learn:35, ChallengesCompleted:9, HelpersActive:8 },
    { UserId:3, Score:900, Team:10, Learn:15, ChallengesCompleted:50, HelpersActive:5 },
    { UserId:4, Score:1500, Team:15, Learn:45, ChallengesCompleted:80, HelpersActive:2 }
]

const userTeamData = [
    { UserId:1, Name:'Joao', Rank: 2 },
    { UserId:1, Name:'Marcos', Rank: 1 },
    { UserId:1, Name:'Gabriel', Rank: 3 },
    { UserId:1, Name:'Pedro', Rank: 2 },
    { UserId:1, Name:'Leonardo', Rank: 4 },

    { UserId:2, Name:'Felipe', Rank: 2 },
    { UserId:2, Name:'Lucas', Rank: 1 },
    { UserId:2, Name:'Vinicius', Rank: 2 },
    { UserId:2, Name:'Paulo', Rank: 1 },
    { UserId:2, Name:'Rafael', Rank: 3 },
    { UserId:2, Name:'Renato', Rank: 2 },
    { UserId:2, Name:'Alfonso', Rank: 4 },

    { UserId:3, Name:'Joao', Rank: 2 },
    { UserId:3, Name:'Marcos', Rank: 1 },
    { UserId:3, Name:'Gabriel', Rank: 3 },
    { UserId:3, Name:'Pedro', Rank: 2 },
    { UserId:3, Name:'Leonardo', Rank: 4 },
    { UserId:3, Name:'Joao', Rank: 2 },
    { UserId:3, Name:'Marcos', Rank: 1 },
    { UserId:3, Name:'Gabriel', Rank: 3 },
    { UserId:3, Name:'Pedro', Rank: 2 },
    { UserId:3, Name:'Leonardo', Rank: 4 },

    { UserId:4, Name:'Joao', Rank: 2 },
    { UserId:4, Name:'Marcos', Rank: 1 },
    { UserId:4, Name:'Gabriel', Rank: 3 },
    { UserId:4, Name:'Pedro', Rank: 2 },
    { UserId:4, Name:'Leonardo', Rank: 4 },
    { UserId:4, Name:'Joao', Rank: 2 },
    { UserId:4, Name:'Mark', Rank: 1 },
    { UserId:4, Name:'Gabriel', Rank: 3 },
    { UserId:4, Name:'Luis', Rank: 2 },
    { UserId:4, Name:'Henrique', Rank: 4 },
    { UserId:4, Name:'Bruno', Rank: 2 },
    { UserId:4, Name:'Marcos', Rank: 1 },
    { UserId:4, Name:'Gabriel', Rank: 3 },
    { UserId:4, Name:'Eduardo', Rank: 2 },
    { UserId:4, Name:'Egidio', Rank: 4 },
]

exports.statistics = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rocketseat-hack'];
        let userId = req['query'].data;

        console.log("(userController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.log(err);
                    console.error("(userController)   [ Erro ao validar o token... ]");
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded
                    console.log("(userController)   [ Token Valido! ]");

                    // retornar tema e desafio 
                    res.status(200).json({
                        success: true,
                        data: userData.find(x => x.UserId == userId),
                        message: 'Estatistica encontrada com sucesso'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(userController)   [ Token nao Informado! ]")
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

exports.theme = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rocketseat-hack'];
        let userId = req['query'].data;

        console.log("(userController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.log(err);
                    console.error("(userController)   [ Erro ao validar o token... ]");
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded
                    console.log("(userController)   [ Token Valido! ]");

                    // retornar tema e desafio 
                    res.status(200).json({
                        success: true,
                        data: tema.find(x => x.UserId == userId),
                        message: 'Tema encontrado com sucesso'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(userController)   [ Token nao Informado! ]")
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

exports.team = async (req, res, next) =>
{
    try
    {
        let token = req.headers['x-rocketseat-hack'];
        let userId = req['query'].data;

        console.log("(userController)   [ Validando token... ]")
        if (token) 
        {
            jwt.verify(token, config.secret_key, (err, decoded) => {
                if (err) 
                {
                    console.log(err);
                    console.error("(userController)   [ Erro ao validar o token... ]");
                    return res.status(401).json({
                        success: false,
                        message: 'Token não é válido'
                    });
                } 
                else 
                {

                    // Aplica regra de negocio
                    // decoded
                    console.log("(userController)   [ Token Valido! ]");

                    // retornar tema e desafio 
                    res.status(200).json({
                        success: true,
                        data: userTeamData.filter(x => x.UserId == userId),
                        message: 'Time encontrado com sucesso'
                    });
                    console.log("");
                    console.log("");
                }
            });
        } 
        else 
        {
            console.log("(userController)   [ Token nao Informado! ]")
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