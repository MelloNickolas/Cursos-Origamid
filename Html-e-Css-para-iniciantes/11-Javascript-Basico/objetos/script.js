/* 
Aqui estamos criando cada variavel para um valor especifico, ou seja, se tivessemos 
um código muito grande, isso atrapalharia, pois teriam que ter muitas linhas dde códigos
e muitas variaveis. 
*/
const nomeFilme = 'O senhor dos Anéis';
const anoFilme = 1954;
const autorFilme = "J. J. R. Tolkien";

/* para resolvermos isso nós criamos um OBJETO, e dentro dele colocamos as PROPRIEDADES */
const filme = {
  nome: "O senhor dos Anéis",
  ano: 1954,
  autor: "J. J. R. Tolkien"
};

/* Aqui para puxar uma propriedade do nosso objeto podemos simplesmente colocar um .  */
console.log(filme.ano);

/* Esa constante não possui uma propriedade definida porém tudo em JavaScript é um objeto,
ou seja, esse innerHTML é uma função do JavaScript que coloca ele como uma propriedade direto
por causa do console, é uma propriedade importada do consoler.
*/
const texto = document.querySelector("p");
console.log(texto.innerHTML);
console.log(texto.clientHeight);

/* Tambem temos os métodos que mudam os valores, seja para arredondar um valor, muda todas
para maiúscu;a etc... lembre-se todo método tem que ter parenteses. */
console.log(autorFilme.toUpperCase());

const decimal = 222.99
console.log(Number(decimal.toFixed())) /* esse toFixed ele sempre retorna String, por isso o Number */

/* nós podemos colcoar mais de um método, um seguido do outro, entÃO É muito comum ver um monte . os códigos */
const total = decimal.toFixed().length;
console.log(total)