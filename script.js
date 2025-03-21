document.addEventListener("DOMContentLoaded", function () {
      const textElement = document.querySelector(".text-home");
      const text = "Simplifique processos, reduza custos e aumente a eficiência da sua empresa com nossas soluções inovadoras.";
      let index = 0;

      const hamburger = document.querySelector(".hamburger")
      const nav = document.querySelector(".nav")

      hamburger.addEventListener("click", () =>{
            nav.classList.toggle("active")
      })


      function typeEffect() {
            if (index < text.length) {
                  textElement.textContent += text.charAt(index);
                  index++;
                  setTimeout(typeEffect, 50); // Velocidade da digitação
            }
      }

      textElement.textContent = ""; // Limpa o texto inicial
      typeEffect(); // Inicia o efeito
});