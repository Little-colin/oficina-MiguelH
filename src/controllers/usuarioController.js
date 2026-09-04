const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
async function cadastrar(req, res) {
try {
const { nome, email, senha, tipo, veiculo, placa} = req.body;
const senhaCriptografada = await bcrypt.hash(senha, 10);
const usuario = await Usuario.create({nome, email, senha: senhaCriptografada, tipo, veiculo, placa, problema});
res.status(201).json({
id: usuario.id,
nome: usuario.nome,
email: usuario.email,
veiculo: usuario.veiculo,
placa: usuario.placa,
problema: usuario.problema
});
} catch (erro) {
res.status(400).json({
mensagem: 'Erro ao cadastrar usuário', erro: erro.message, });
}
}
module.exports = { cadastrar };