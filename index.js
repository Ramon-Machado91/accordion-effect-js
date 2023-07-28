let perguntasERespostas = document.querySelectorAll(".item");

perguntasERespostas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const itemAtivoAtual = document.querySelector(".ativo");
    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo");
    }
    itemAtivoAtual.classList.remove("ativo");

    pergunta.classList.add("ativo");
  });
});
