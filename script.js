document.addEventListener("DOMContentLoaded", function () {
      const textElement = document.querySelector(".text-home");
      const text = "Simplifique processos, reduza custos e aumente a eficiência da sua empresa com nossas soluções inovadoras.";
      let index = 0;

      const hamburger = document.querySelector(".hamburger")
      const nav = document.querySelector(".nav")
      const itens = document.querySelectorAll(".item")

      hamburger.addEventListener("click", () =>{
            nav.classList.toggle("active")
      })

      itens.forEach(item =>{
            item.addEventListener("click", () =>{
                  nav.classList.remove("active")
            })
      })
      function typeEffect() {
            if (index < text.length) {
                  textElement.textContent += text.charAt(index);
                  index++;
                  setTimeout(typeEffect, 50); 
            }
      }

      textElement.textContent = ""; 
      typeEffect(); 
});