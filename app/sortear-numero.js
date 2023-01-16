const maiorValor = 1000;
const menorValor = 1;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1); //coloco o +1 porque ele não inclui o ultimo numero. no caso ele só vai até 99
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
console.log(numeroSecreto);
