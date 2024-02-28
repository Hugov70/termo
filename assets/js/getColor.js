import { quadrados } from "./qua.js";
import { palavra, palavraJogador, linhaAtual, tabela, celulas, colunaAtual } from "./main.js";
const letrasRepetidas = [];
const letrasRepetidasJogador = [];
export function palavraInvalida() {
  let acumulador = 0;
  for (let c = 0; c < 5; c++) {
    for (let i = 0; i < 5; i++) {
      if (palavraJogador[c] === palavraJogador[i]) acumulador++;
      if (acumulador >= 3) return true;
    }
    acumulador = 0;
  }
}

export function recebeCor() {
  for (let c = 0; c < 5; c++) {
    if (palavraJogador[c] === palavra[c]) {
      quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'green';
      for (let i = 0; i < celulas.length; i++) {
        if (celulas[i].innerText.trim() === palavraJogador[c]) {
          celulas[i].style.backgroundColor = "green";
        }
      }
    }

    if (quadrados[linhaAtual][`index${c}`].style.backgroundColor !== 'green') {
      if (palavraJogador[c] === palavra[0] || palavraJogador[c] === palavra[1] || palavraJogador[c] === palavra[2] || palavraJogador[c] === palavra[3] || palavraJogador[c] === palavra[4]) {
        quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'yellow';
        for (let i = 0; i < celulas.length; i++) {
          if (celulas[i].innerText.trim() === palavraJogador[c] && celulas[i].style.backgroundColor !== "green") {
            celulas[i].style.backgroundColor = "yellow";
          }
        }
      }

    }

    if (quadrados[linhaAtual][`index${c}`].style.backgroundColor !== 'green' && quadrados[linhaAtual][`index${c}`].style.backgroundColor !== 'yellow') {
      quadrados[linhaAtual][`index${c}`].style.backgroundColor = '#312A2C';
      for (let i = 0; i < celulas.length; i++) {
        if (celulas[i].innerText.trim() === palavraJogador[c] && celulas[i].style.backgroundColor !== "green" && celulas[i].style.backgroundColor !== "yellow") {
          celulas[i].style.backgroundColor = "#312A2C";
        }
      }
    }


  }
  
  //repeteLetraJogador();
  //repeteLetra();
}

function repeteLetra() {
  let acumulador = 0;
  for (let c = 0; c < 5; c++) {
    for (let i = 0; i < 5; i++) {
      if (palavraJogador[c] === palavra[i]) acumulador++;
      if (acumulador <= 1) {
        if (quadrados[linhaAtual][`index${c}`].style.backgroundColor !== 'green'  ) {
          quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'gray';
        }
      }
      if (acumulador === 2 && !letrasRepetidas.includes(palavraJogador[c])) {
        letrasRepetidas.push(palavraJogador[c])
      }

    }


    acumulador = 0;

  }
  console.log(letrasRepetidas)
  setColor();
}

function repeteLetraJogador() {
  let acumulador = 0;
  for (let c = 0; c < 5; c++) {
    for (let i = 0; i < 5; i++) {
      if (palavraJogador[c] === palavraJogador[i]) acumulador++;
      if (acumulador <= 1) {
        if (quadrados[linhaAtual][`index${c}`].style.backgroundColor !== 'green') {
          quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'gray';
        }
      }
      if (acumulador === 2 && !letrasRepetidasJogador.includes(palavraJogador[c])) {
        letrasRepetidasJogador.push(palavraJogador[c])
      }

    }


    acumulador = 0;

  }
  console.log(letrasRepetidasJogador)
  setColorJogador();
}

function setColor() {
  for (let i = 0; i < letrasRepetidas.length; i++) {
    for (let c = 0; c < 5; c++) {
      console.log(letrasRepetidas[i] === quadrados[linhaAtual][`index${c}`].innerText)
      if (letrasRepetidas[i] === quadrados[linhaAtual][`index${c}`].innerText) {
        if (quadrados[linhaAtual][`index${c}`].style.backgroundColor === 'gray') {
          quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'yellow';
          return;
        }
      }
    }
  }
}

function setColorJogador() {
  for (let i = 0; i < letrasRepetidasJogador.length; i++) {
    for (let c = 0; c < 5; c++) {
      console.log(letrasRepetidasJogador[i] === quadrados[linhaAtual][`index${c}`].innerText)
      if (letrasRepetidasJogador[i] === quadrados[linhaAtual][`index${c}`].innerText) {
        if (quadrados[linhaAtual][`index${c}`].style.backgroundColor === 'gray') {
          quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'yellow';
          let indice = letrasRepetidasJogador.indexOf(letrasRepetidasJogador[i]); 
          if (indice !== -1) { 
            letrasRepetidasJogador.splice(indice, 1); 
          }
          console.log('Oi ', letrasRepetidasJogador)
          break;
        }
      }
    }
  }
  setColorJogador2();
}

function setColorJogador2() {
  for (let i = 0; i < letrasRepetidasJogador.length; i++) {
    for (let c = 0; c < 5; c++) {
      console.log(letrasRepetidasJogador[i] === quadrados[linhaAtual][`index${c}`].innerText)
      if (letrasRepetidasJogador[i] === quadrados[linhaAtual][`index${c}`].innerText) {
        if (quadrados[linhaAtual][`index${c}`].style.backgroundColor === 'gray') {
          quadrados[linhaAtual][`index${c}`].style.backgroundColor = 'yellow';
          break;
        }
      }
    }
  }
}




