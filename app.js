"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
const funcionario = {
    code: 10,
    name: "Will"
};
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: "Laura",
    idade: 31,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
// Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = "0";
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        campoSaldo.innerHTML = String(Number(soma) + Number(campoSaldo.textContent));
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
