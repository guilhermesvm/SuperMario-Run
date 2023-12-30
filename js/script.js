const mario = document.querySelector(".mario"); //Seleciona em quem vai acontecer a função,no  a classe CSS '.mario'.
const pipe = document.querySelector(".pipe");
const goomba = document.querySelector(".goomba");
const clouds = document.querySelector(".clouds");
const bush = document.querySelector(".bush");
const bush1 = document.querySelector(".bush1");

//Função de pulo
const jump = () => {
   mario.classList.add("jump"); //Adiciona o 'mario' na classe "jump", a qual contém a animação de pulo.

   setTimeout(() => {
      //Utilizado para fazer o Mário pular mais de uma vez.
      mario.classList.remove("jump");
   }, 500); // A cada 500milissegundos, ele adiciona e remove a animação para ser acionada novamente.
};

document.addEventListener("keydown", jump); // Quando qualquer tecla é apertada, executa a função jump().

//Loop que verifica a cada momento se o jogador perdeu ou não.
const loop = setInterval(() => {
   const pipePosition = pipe.offsetLeft;
   const goombaPosition = goomba.offsetLeft;
   const cloudsPosition = clouds.offsetLeft;
   const bushPosition = bush.offsetLeft;
   const bush1Position = bush1.offsetLeft; //Constantes de cada item do cenário que param na posição que estão quando o Mario perde.

   const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./img/game-over.png"; // Troca a iamgem do Mario quando ele perde.
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`; //*

      bush.style.animation = "none";
      bush.style.left = `${bushPosition}px`; //*

      bush1.style.animation = "none";
      bush1.style.left = `${bush1Position}px`; //*

      goomba.style.animation = "none";
      goomba.style.left = `${goombaPosition}px`;

      clearInterval(loop); // Ao perder, o loop acaba.

      setTimeout(function () {
         window.location.reload();
      }, 2000);
   }

   if (goombaPosition <= 120 && goombaPosition > 0 && marioPosition < 90) {
      goomba.style.animation = "none";
      goomba.style.left = `${goombaPosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./img/game-over.png"; // Troca a iamgem do Mario quando ele perde.
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`; //*

      bush.style.animation = "none";
      bush.style.left = `${bushPosition}px`; //*

      bush1.style.animation = "none";
      bush1.style.left = `${bush1Position}px`; //*

      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`; //*

      clearInterval(loop); // Ao perder, o loop acaba.

      setTimeout(function () {
         //Ao perder, a página reinicia após 2 segundos.
         window.location.reload();
      }, 2000);
   }
}, 10);

// ! FALTA , GAMEOVER, CONTADOR DE PULOS E BACKGROUND
