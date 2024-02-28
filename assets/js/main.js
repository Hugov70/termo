export const palavra = ['T', 'O', 'R', 'T', 'A']; 
export let palavraJogador = [];
let possoColocarCaractere = true;
let possoJogar = true;
export let linhaAtual = 0;
export let colunaAtual = 0; 
export let tabela = document.getElementById("keyboard");
export let celulas = tabela.getElementsByTagName("td");
const msg = document.getElementById('msg');
import { quadrados } from "./qua.js"; 
import { recebeCor } from "./getColor.js";
import { palavraInvalida } from "./getColor.js";



document.addEventListener('click', e => {
    const el = e.target;
    if (possoJogar && possoColocarCaractere && el.classList.contains('caractere')) {
        preencherCasa(el);
        podeResponder();
        return
    }

    if ( possoJogar && el.classList.contains('enter')) {
        if (palavraJogador.length < 5) {
            msg.innerText = 'Só palavras com 5 letras'; 
            return
        }
        if (palavraInvalida()) {
            msg.innerText = 'Palavra inválida'; 
            return
        }
        verificarResposta();
        possoColocarCaractere = true;
        linhaAtual++
    }

    if ( possoJogar && el.classList.contains('backspace')) {
        console.log('Entrei aqui')
        if (palavraJogador.length > 0) {
            backspace();
        }
    }
}); 

document.addEventListener('keyup', function (e) {
    if ( possoJogar && e.keyCode === 13) {
        if (palavraJogador.length < 5) {
            msg.innerText = 'Só palavras com 5 letras'; 
            return
        }
        verificarResposta();
        possoColocarCaractere = true;
    } 
    if (possoJogar && e.keyCode === 8) {
        backspace();
    } 
})

function preencherCasa(el) {
    if (colunaAtual > 4) colunaAtual = 0; 
    quadrados[linhaAtual][`index${colunaAtual}`].innerHTML = el.innerText;
    palavraJogador.push(el.innerText);
    colunaAtual++
}

function verificarResposta () {
    recebeCor(); 
    if (palavra.join("") === palavraJogador.join("")) {
        msg.innerText = 'Parabéns, você ganhou'; 
        possoColocarCaractere = false; 
        possoJogar = false;
        return
    }
    palavraJogador = [];
    
}



function podeResponder () {
    if (linhaAtual === 5 || linhaAtual === 10 || linhaAtual === 15 || linhaAtual === 20 || linhaAtual === 25) {
        possoColocarCaractere = false;
    }
}

function backspace() {
    colunaAtual--;
    quadrados[linhaAtual][`index${colunaAtual}`].innerHTML = '';
    palavraJogador.pop();
}