let estado = 0;
let botao = document.getElementById("botao");
let imagem = document.getElementById("imagem");
let legenda = document.getElementById("texto");
let h2 = document.getElementById("h2");
let h1 = document.getElementById("h1");
let  p = "Vejam essa menina linda!!";
let alertaMostrado = false;

botao.addEventListener ("click", function abrirPresente() {
    if (estado == 0) {
        if (!alertaMostrado) { 
            alert("IMAGENS NÃO FICAM LEGAIS NO COMPUTADOR!!! Se estiver no celular pode só fechar esse alerta e continuar com a sua surpresa especial :)") 
            alertaMostrado = true; 
        }
        imagem.src = "imagem.png";
        imagem.style.display = "block";
        h2.style.display = "block";
        h1.style.display = "block";
        legenda.style.display = "none";
        imagem.style.width ="100%";
        botao.textContent = "Abrir Presente...";
        estado = 1;
    } else if (estado == 1) {
        imagem.src = "ellysfofa.png";
        imagem.style.width = "100%";
        legenda.textContent = p;
        legenda.style.display = "block";
        h2.style.display = "none";
        h1.style.display = "none";
        botao.textContent = "Parece que tem mais alguma coisa! Vamos descobrir!";
        estado = 2;
    } else {
        imagem.src = "ellysloca.png";
        imagem.style.width = "100%";
        legenda.style.display = "none";
        botao.textContent = "Fechar caixa.";
        estado = 0;
    }
});

