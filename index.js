const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagenBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {imagenBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

if(modoEscuroEstaAtivo) {
    body.classList.remove("modo-escuro");

   imagenBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

} else {    body.classList.add("modo-escuro");

}  
});