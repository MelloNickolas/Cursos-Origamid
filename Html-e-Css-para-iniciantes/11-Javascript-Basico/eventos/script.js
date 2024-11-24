/* Métodos são funçoes dentro de um objeto. */
const curso = {
  nome: "propriedade",
  completar() {
    console.log("Curso Completo")
    console.log(this.nome)
    /* This ele substitui o objeto pai, como assim, dentro do metodo quando voce coloca
    THIS ele vai puxar o objeto que ele esta dentro que nesse caso é o curso */
  },
};
console.log(curso.nome)
console.log(curso.completar())/* Retorna undefined pois nao tem um return na funcao */



/* Evento  é basicamente alguma coisa que acontece no seu site, como o scroll da PÁGINA
um click do usuário, e eles são usadas para executar funçoes, um exemplo é, quando o usuário
clicar no botão, ele vai mudar a cor da página, então nos criamos uma funcao com um evento de
click que muda a cor da página*/

const ativar = document.querySelector(".ativar") /* colocando a classe em uma variavel */

function ativarAoClick(){
  console.log('clicou em: ', ativar)
}

/* esse é a propriedade que faz a mágica! */
ativar.addEventListener("click", ativarAoClick) /* (tipo de evento, funçao ) */
/* Aqui nós não colcamos () na funçao pois ela não possui um return, mas ele internamente ja vai 
saber que é para ativar ao click  */





const ativar2 = document.querySelector(".ativar")

/* esse parametro que colocamos na funçao ele é gerado automaticamente pelo addEventListener */
function aoClique(evento) {
  console.log(evento.x) /* diz a coordenada d0 eixo x onde foi clicado em relaçao a pagina */
  console.log(evento.y) /* diz a coordenada d0 eixo y onde foi clicado em relaçao a pagina */
  console.log(evento.timeStamp) /* diz o tempo que o usuário levou desde abrir o site ate clicar no botao*/
}
ativar2.addEventListener("click", aoClique)





const ativar3 = document.querySelector(".ativar")

/* esse comentário serve para definir qual o tipo de evento que vai acontecer, assim quando voce
colocar o . ele vai automaticamente completar os metódos que tem, não é muito necessário caso você
saiba qual é a propriedade */
/** @param {MouseEvent} evento */ 
function aoClique2(evento) {
  console.log(evento.x) /* diz a coordenada d0 eixo x onde foi clicado em relaçao a pagina */
  console.log(evento.y) /* diz a coordenada d0 eixo y onde foi clicado em relaçao a pagina */
  console.log(evento.timeStamp) /* diz o tempo que o usuário levou desde abrir o site ate clicar no botao*/
}
ativar3.addEventListener("click", aoClique2)





const botao = document.querySelector(".botao")

function mostrarTexto() {
  const texto = document.querySelector(".texto") /* seleciono a classe do texto */
  /* texto.classList.add("mostrar")  aqui quando ocorre o click nós add a funçao mostrar que está no css  */
  /* texto.classList.remove("mostrar")  aqui quando ocorre o click remove a classe mostrar */
  texto.classList.toggle("mostrar") /* se mostrar estiver adicionado ele remove e vice-versa  */
}

botao.addEventListener('click', mostrarTexto)





/* Temos tambemm o WINDOW, ele basicamente tem todo conteúdo do seu browser, consegue pegar a url, a largura
da sua tela, a altura da sua tela, basicamente quase tudo */
const larguraTela = window.innerWidth; /* mede a largura da tela */
const alturaTela = window.innerHeight /* mede a altura da tela */

function coordenadasMouse(evento){
  const coordenadas ={
    x: evento.x,
    y: evento.y
  }
  console.log(coordenadas)
}
/* Ele adiciona basicamente um evento que ocorre quando você mexe o mouse, como colocamos na funcão para
descobrir onde esta o mouse na tela  */
/* window.addEventListener('mousemove', coordenadasMouse) */

function scroll() {
  console.log("Usou o Scroll ")
}

window.addEventListener('scroll', scroll)