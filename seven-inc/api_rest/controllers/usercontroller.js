const connection = require('../config/database.js')();
const Funcionario = require('../models/Users');
const bodyParser = require('body-parser');

module.exports = {
    getAllFunc: (req, res, next) => {
        Funcionario.find().then(func =>{
            res.status(201).json({msg: 'Funcionário: ' + func});
        }).catch(error =>{
            res.status(404).json({msg: 'Erro ao listar funcionário !!!'});
        });
    },
    getFuncById: (req, res, next) => {
        var id = req.params.id;
        Funcionario.findById(id).then(func =>{
            res.status(201).json({msg: 'Funcionário com esse id: ' + func});
        }).catch(error =>{
            res.status(404).json({msg: 'Não existe funcionário com essa id !!!' + id});
        });
    },
    addFunc: (req, res, next) => {
        var newFunc = new Funcionario(req.body);
        newFunc.save().then(savedFunc =>{
            res.status(201).json({msg: 'Funcionário cadastrado com sucesso !!!'});
        }).catch(error =>{
            res.status(404).json({msg: 'Erro ao cadastrar funcionário !!!'});
        });
    },
    editFunc: (req, res, next) => {
        var funcData = req.body;
        var id = funcData.id;
        var name = funcData.name;
        var bornDate = funcData.bornDate;
        var salary = funcData.salary;
        var position = funcData.position;
        Funcionario.findById(id).then(func =>{
            Funcionario.updateOne({_id: id}, {name, bornDate, salary, position}).then(newFunc => {
                res.status(201).json({msg: 'Funcionário: ' + func + ' alterado com sucesso para !!!'});
            }).catch(error => {
                res.status(404).json({msg: 'Erro ao atualizar funcionário !!!'});
            })
        }).catch(error =>{
            res.status(404).json({msg: 'Não existe funcionário com essa id !!!' + id});
        });
    },
    deleteFunc: (req, res, next) => {
        var id = req.body.id;
        Funcionario.findById(id).then(func =>{
            Funcionario.deleteOne({_id: id}).then(newFunc => {
                res.status(201).json({msg: 'Funcionário: ' + func + ' excluído com sucesso !!!'});
            }).catch(error => {
                res.status(404).json({msg: 'Erro ao excluir funcionário !!!'});
            });
        }).catch(error =>{
            res.status(404).json({msg: 'Não existe funcionário com essa id !!!' + id});
        });
    }
}