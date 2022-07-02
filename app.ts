// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


// Desafio 1

interface Funcionario {
    code : number,
    name : String
}

const funcionario : Funcionario = {
    code : 10,
    name : "Will"
}

// Desafio 2

// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Pessoa {
    nome : String,
    idade : number,
    profissao? : string
}

enum Profissao {
    "Atriz" = "Atriz",
    "Padeiro" = "Padeiro"
}

const pessoa1 : Pessoa = {
    nome : 'Maria',
    idade : 29,
    profissao : Profissao.Atriz
}

const pessoa2 : Pessoa = {
    nome : "Roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}

const pessoa3 : Pessoa = {
    nome : "Laura",
    idade : 31,
    profissao : Profissao.Atriz
}

const pessoa4 : Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}

// Desafio 3

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo) {
    campoSaldo.innerHTML = "0"
}

function somarAoSaldo(soma : number) {
    if(campoSaldo) {
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