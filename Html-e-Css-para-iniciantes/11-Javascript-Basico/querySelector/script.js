/*
Resumidamente o QUERYSELECTOR é bem similiar ao seletor do css, ele seleciona dentro das "" o elemento
que ele deseja adicionar a váriavel.
Você pode verificar rodando o html que esse código vai retornar no CONSOLE os elementos do query.
*/

const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

/* Puxa o HTML que vai estar dentro da váriavel produtos */
console.log(produtos.innerHTML)
/* Puxa a raiz da sua váriavel no HTML */
console.log(produtos.href);
/*
produtos.remove()
Aqui ele vai remover a sua váriavel remove, elanão vai mais existir
*/

/* Ele roda  e mostra no CONSOLE as propriedades e os métodos do elemento */
console.dir(nav);

/* Olha que legal aqui podemos modificar o CSS do nosso HTML pelo javascript, ou seja eu puco a varicavel
que esta armazenando o elemento que eu quero mudar o css, e uso as propriedades dele logo em seguida */
nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

/* Aqui estamos adicionando no conteúdo da nossa váriavel nav a classe ativo, sim adicionamos pelo
javascript, e podemos colocar ela no css que ela vai funcionar, eu coloquei um padding lá e realmente
adicionou na nossa nav */
nav.classList.add("ativo");
