/* O querySelectorAll basicamente puxa todos os elementos que tem a condicao desejada
exemplo, se eu usar o querySelector para puxa uma <li> ele vai puxar somente a primeira <li>
já o querySelectorAll vai retornar uma ARRAY-LIKE com todas as <li> dentro */

const linksSelector = document.querySelector("nav a");
console.log(linksSelector) //Pode ver que ele vai retornar somente o primeiro a

const linksSelectorAll = document.querySelectorAll("nav a");
console.log(linksSelectorAll) // selecionou todos ps links e retornou em um NodeList

// CASO VOCE DESEJA ALTERAR A NODELIST PARA UM ARRAY DE VDD FAÇA ISSO
// nodelist nao funciona os métodos como o pop, push, map, filter etc..
const testArray = Array.from(document.querySelectorAll("nav a"));
console.log(testArray)

function linkHref(item) {
  const href = item.href
  console.log(item)
}

linksSelectorAll.forEach(linkHref); // como ele retornou um array é possível realizar um forEach para ele
console.log(linksSelectorAll[linksSelectorAll.length - 1].innerHTML) // puxa o ultimo item da lista
// tem o tamanho de 3 porem o indice é (0, 1, 2) entao temos que diminuir um para pegar o ultimo index do array





// UM ARRAY TEMBEM POSSUI MÉTODOS E PROPRIEDADES

const jogadores = ['Neymar', 'Cristiano Ronaldo', 'Messi']
jogadores.pop() // caso nao tenha nada no parenteses ele elimina o ultimo item
jogadores.shift() // caso nao tenha nada no parenteses ele elimina o primeiro item
jogadores.push('Raphael Veiga') // adiciona o conteudo como o ultimo da lista
console.log(jogadores)