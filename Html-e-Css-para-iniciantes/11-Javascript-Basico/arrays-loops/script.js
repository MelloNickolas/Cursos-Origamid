/** Uma Array[] consiste em uma lista de dados lembrando que o INDEX sempre começa do 0
 * exemplo Lista = [0, 1, 2, 3]
*/

const lista = ["JavaScript", "HTML", "CSS"]
const nome = lista[0] // puxa o JavaScript da lista
console.log(lista)
console.log(nome)

const body = document.querySelector("body")

/** Um loop consiste em um laço de repetiçao, ou seja, ele sera repetido de forma determinada ou indetereminada */

/** for(Declara uma variavel = ?; condicao, o que vai acontecer quando ocorrer o loop) */
// index vai somar ele mesmo ex: index = index + 1;
for(let index = 0; index < 5; index++){
  console.log("teste" + index)
}
// lista.lenght === a quantidade de elementos que tem na lista no caso 3
for(let index = 0; index < lista.length; index++){
  console.log(lista[index]) 
// vai rodar na primeira vez e pegar o index 0 da lista no caso JavaScript
// vai rodar a segunda vez e pegar o index 1 da lista no caso HTML
  body.innerHTML += "<li>" + lista[index] + "</li>"
}


/* temos tambem o FOREACH que basicamente ela vai rodar uma funçao para cada item da lista */
function adicionarBody(item){
  body.innerHTML += "<h1>" + item + "</h1>"
}
lista.forEach(adicionarBody) 
// Ele basicamente vai realizar a funcao para cada item dentro do array, independente de quantos
// elementos ele possui dentro da lista, no caso ele ta executando a funcao adicionar body, para
// cada elemento dentro da lista