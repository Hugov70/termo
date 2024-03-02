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
        colunaAtual = 0;
    }

    if ( possoJogar && el.classList.contains('backspace')) {
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
    console.log(linhaAtual,"L e C" , colunaAtual)
    quadrados[linhaAtual][`index${colunaAtual}`].innerHTML = el.innerText;
    palavraJogador.push(el.innerText);
    if (colunaAtual < 4) colunaAtual++
    console.log(linhaAtual,"L e C second" , colunaAtual)
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
    if (colunaAtual === 5 || colunaAtual === 10 || colunaAtual === 15 || colunaAtual === 20 || colunaAtual === 25) {
        possoColocarCaractere = false;
    }
}

function backspace() {
    quadrados[linhaAtual][`index${colunaAtual}`].innerHTML = '';
    palavraJogador.pop();
    if (colunaAtual > 0) colunaAtual--;
    console.log(linhaAtual,"L e C" , colunaAtual)
}