const imagens = document.querySelectorAll("#galeria li img"); 
// selecionamos a lista das imagens

//vamos criar o evento para trocar de imagem.
function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal"); // guardei a minha imagem principal
  const clicada = event.currentTarget; // o event.CurrentTarget simplesmente puxa o elemento que nós clicamos.
  principal.src = clicada.src; // muda o item principal que guardamos pelo item que clicamos
  principal.alt = clicada.alt;

  //   principal.setAttribute('src', clicada.getAttribute('alt'))
  // tambem temos esse set.Attribute, ele é mais recomendável usar pois,
  // tem alguns atributos que só o . nao basta
}

// aqui criamos a funcao do clique, porem nessa funcao vamos ter um evento de troca
// da imagem da lista pela imagem principal, entao vamos colocar o evento
function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique); // adicionamos o evento de clique para cada imagem
