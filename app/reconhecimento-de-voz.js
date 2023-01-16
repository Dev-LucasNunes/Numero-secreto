const elementochute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//com o primeiro window eu digo que quando abrir a aplicação eu quero que essa api esteja funcionando, aqui ele já está configurado o reconhecimento de voz
//pra usar, agora eu preciso colocar uma instancia de reconhecimento de fala para usar e controlar isso, ai usamos o constructor abaixo e definimos a linguagem

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChutenaTela(chute);
  console.log(chute);
  validaChute(chute);
  //o evento de fala como todo evento traz varias coisas e uma delas são os results no array 0 outro array 0
  //e transcript que é aonde está o que eu falei
}

function exibeChutenaTela(chute) {
  elementochute.innerHTML = `
    <div>Você disse:</div>
    <span class= "box">${chute}</span>`;
}

recognition.addEventListener("end", () => recognition.start());
