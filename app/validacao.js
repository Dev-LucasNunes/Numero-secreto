function validaChute(chute) {
  const numero = Number(chute);

  if (Number.isNaN(numero)) {
    elementochute.innerHTML = `<div> Valor inválido, reconhecimento de voz ainda em desenvolvimento, tente falar o número com um zero na frente, ex: "zero dois"</div>`;
    return;
  }

  if (numeroNaoPermitido(numero)) {
    elementochute.innerHTML = `O número secreto precisa estar entre ${menorValor} e ${maiorValor}`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h1>Você acertou!!!</h1>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar" type="">Jogar novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementochute.innerHTML = `<div>
    O número secreto é menor <i class="fa-solid fa-arrows-down-to-line"></i> 
  </div>`;
  } else {
    elementochute.innerHTML = `<div>
    O número secreto é maior <i class="fa-solid fa-arrows-up-to-line"></i> 
  </div>`;
  }
}

function numeroNaoPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload(); // Em JavaScript, "window" representa a janela aberta no navegador. Já "location", nessa linguagem, contém informações sobre a URL atual. Por último, "reload()" é usado para recarregar a página.
  }
});
