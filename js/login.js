const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

// Constante que habilida o opção de apertar o botão apenas quando no mínimo 2 caracteres forem digitados
const validaInput = ({ target }) => {
   if (target.value.length > 2) {
      button.removeAttribute("disabled");
   } else {
      button.setAttribute("disabled", "");
   }
};

const handleSubmit = (event) => {
   event.preventDefault();
   localStorage.setItem("player", input.value); //Salva a informação do player no Local Storage
   window.location = "mario.html"; //Jogador é enviado para página do jogo
};

input.addEventListener("input", validaInput);
form.addEventListener("submit", handleSubmit);
