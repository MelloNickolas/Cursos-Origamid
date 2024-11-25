// Na navbar quero que quando você selecione a pagina onde você quer ficaar ele
// continue com o hover.

const links = document.querySelectorAll('.header-menu a')

/* O includes basicamente verifica se o texto entre parenteses está dentro do 
texto que esta atras do . */
console.log("javascript".includes("java")) // retorna true pq existe

function ativarLink(link) {
  const url = window.location.href // pegamos a url da página atual
  const href = link.href // pegamos o caminho de cada item dos links
  // ou seja, pegamos o href de cada a que temos na nossa navbar

  /* Nós reaalizamos o include aqui, porque pode ter o caso de voce maandaar um formulário,
  quando isso acontece ele muda a url, entao naao se encaixaria, com o includes, ele vai verificar se o 
  href do seu a tem igual na url daa página que o usuário que voce se encontraa */
  if(url.includes(href)){
    console.log(link) // vai mostra qual botao é igual aao link da página
    link.classList.add("ativo") // adc a classe no nosso item, ENTAO AGORA VAMOS MEXER NO CSS DO HEADER-MENU A
  }
}
links.forEach(ativarLink) // ativando para cada item do array dos links











// A outra coisa que eu quero fazer é que quando eu aperto em comprar agr nas bicicletas ou nos seguros, la no orçamento eu 
// tenho que selecionar ela denovo, em vez disso eu quero q aparecaa ela selecionadaa ja, quero que marque automaticamente o input

/* 
A primeira coisa que vamos fazer é mudar o href de comprar agora e colocar os valores dele no href, nao entendeu?, vou dar um
exemplo, selecionei o plano prata, e apertei em inscreva-se, em vez do botao só levar o usuário a página de orçamentos, ele vai 
passar os parâmetros do check que está na parte do orçamento ou seja, se é o plaano PRATA, no botão tem que estar:

href="./orcamento.html?tipo=seguro&produto=prata"
? = passando os parametros
& = adicionamos mais um parametro

nós colocamos essa url pois no check que queremos selecionar de seguros o name="tipo" value="seguro", então aa url que tem esse parametors,
vai ser checada nessa checkbox, já a outra checkbox tem o name="produto" e o value="prata", por isso passamos essa url, 
pode verificar na sua HTML.
*/

// estamos armazenando somente os porametros de busca da nossa url, tudo que vem a partir da ?
const parametros = new URLSearchParams(window.location.search) 
console.log(parametros) // nao funciona pois retorna um array

function ativarProduto(parametro) {
  console.log(parametro) // vai mostrar cada parametro que voce passou
  // camos pegar todo id que for igual ao parametro, ou seja o input que tem o id = seguro e o id = prata
  // pois passamos dois parametros 
  const elemento = document.getElementById(parametro) 
  // verifica se o elemento com os parametros existe, caso nao exista retorna null
  if(elemento) {
    // check os inputs com o parametro
    elemento.checked = true 
  }
  console.log(elemento)
}
parametros.forEach(ativarProduto) // se tem um array vamos usar um laço de repetiçao








// Agora eu quero que nas peguntas frequentes a pergunta suma e apareça quando eu clicar em cima da setinha

/* o primeiro passo é envolver os títulos das perguntas em um button, pois vamos clicar neles para aparecer o conteudo */

/* logo em seguida voce tem que informar se conteúdo que você quer mostrar vai tar mostranto ou nao, eu vou começar mostrando
a primeira pergunta entao eu vou la no butto e coloco, ARIA-EXPANDED=TRUE, significa q a area esta mostrando, e nos outros eu vou
colocar a mesma coisa só que com valor FALSE.*/

/* o terceiro passo é você mostrar a area que você está controlando, ou seja, eu vou colocar no meu button o 
ARIA-CONTROLS="id do conteudo que você quer controlar", no caso eu coloquei um id para cada pergunta, assim você
vai poder controlar seu conteúdo através do botão. */

// aria-control === mostra o conteúdo que seu botão vai controlar
// aria-expanded === vai mostrar se seu conteúdo vai começar aparecendo ou não

/* Quarto passo é você colocar no conteúdo do botao que voce deixou o aria-extend="true" uma class, eu coloque com o nome ativa,
nessa classe você coloca um display block para aparecer, e no resto do conteúdo, você deixa como display none, para sumir. 
TEM NO CSS QUE EU COLOQUEI COMO FAZER PARA O CSSE MUDAR QUANDO ESTIVER ATIVO O CONTEÚDO (perguntas.css) */

const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
  const pergunta = event.currentTarget // Puxa a pergunta que o usuário clickou
  const controls = pergunta.getAttribute("aria-controls") // puxando qual é o valor do aria de cada pergunta
  const resposta = document.getElementById(controls) // vai puxar o elemento que tem o id igual ao aria-controls da pergunta
  resposta.classList.toggle("ativa") // vai colocar a classe nesse elemento quando nao tiver e remover quando tiver a classe

  const ativa = resposta.classList.contains("ativa") // verificando se o elemento contem a classe ativa, para mudar o aria para true ou false
  pergunta.setAttribute("aria-expanded", ativa) // seta um novo atributo, que caso a class ativa existir retorna true, e caso bnao retorna false
}

function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta) // quando for clicado roda a funcao de ativarPergunta
}
perguntas.forEach(eventosPergunta) // para cada button






/* Agora eu quero mudar a imagem da galeria das bicicletas, quero que quando clique em um, coloque ela em destaque lá em cima */ 
const galeria = document.querySelectorAll(".bicicleta-imagens img") // guarrdando as fotos em um array
const galeriaContainer = document.querySelector(".bicicleta-imagens") /* vamos pegar o container para adicionar a img como primeira, pois
no meu css a imagem que vem primeiro fica maior. */

function trocarImagem(event) {
  const img = event.currentTarget; //Pega o elemento que o usuário está clicando
  /* Aqui no matchmedia estamos colcaanod o min-width, par que quando a tela tiver esse min-width abaixo de 100 ela vai retornar dela
  o matches=""true*, isso serve para sites responsivos*/
  const media = window.matchMedia("(min-width: 1000px)").matches
  if(media){ //verifica se o valor do media é true
    galeriaContainer.prepend(img) // adicionamos o elemento que o usuário clicou como primeiro com o PREPEND    
  }
  
}

function eventosGaleria(foto) {
  foto.addEventListener("click", trocarImagem) //quando clicar a funcao será executada
}

galeria.forEach(eventosGaleria) // para cada foto da galeria





/* VAMOS AGORA USAR PLUGINS PARAA ANIMAÇÃO, QUE SÃO CÓDIGOS PRONTOS COM ANIMAÇÃO NELES, ele está no https://github.com/origamid/simple-anime
 caso você perda e nao lembra, mas tambem está no plugins.js, tambem tem o tutorial de como usar no repositorio, primeiro vamos colocar 
 os links nos repositorios que nos queremos, lembraando importe ele primeiro de qualquer arquivo de script!! */

// iniciando o nosso plugin
// coloquei o if para ele rodar somente quando ele foi importado no script, eu vejo se na janela, o SimpleAnime está funcionando
// isso só vai ocorre se tiver o link do script dele lá
if(window.SimpleAnime){
  new SimpleAnime()
}

/* Adicione o atributo data-anime ao elemento que deseja animar. Informe o total em milessegundos,
 que o JavaScript deve esperar até a animação iniciar, exemplo:
 <button data-anime="1500">Clique Aqui</button>
No exemplo eu coloquei no introduçao-bg.
*/

/* Mesmo fazendo tudo isso nao deu certo, porque nao tem css, eu criei lá em ultilidades, o arquivo animacao.css, agora está funcionando!
porem ela nao ficou muito boa, entao eu coloquei agora a animacao em cada item do texto, e depois os translates */

/* Caso você queira um plug-in Externo pode usar o clipboard.js, aabre ele e lá em baixo ele explica como usar o plugin dele, caso 
queira usa-lo e ainda esteja com duvida tem a aula Plugin Externo no Html-para-Iniciantes da origamid */







/* Mas se o JAVASCRIPT NAO FUNCIONAR o que vai acontecer com as animações, o meu site vi ficar bugado?, primeiro você vai criar uma script
no head do seu html, la vou explicar melhor, ta no INDEX.HTML */
