/** condicional é o famoso IF e o else 
 * Valores BOOLEANS são o TRUE e o FALSE, para verificar se o valor vai retornar
 * TRUE or FALSE nós usamos aa funcao Boolean()
 */

const condicaoStringFalse = Boolean("") // se torna um valor false, pois noa possue conteúdo
const condicaoStringTrue = Boolean("Alguma coisa") // retorna TRUE, pois possue um conteúdo
console.log(condicaoStringFalse)
console.log(condicaoStringTrue)

const condicaoNumberFalse = 0 // sempre que for zero a funcao boolean vai retornar FALSE
const condicaoNumberTrue = 10 // como não é zero o valor se torna TRUE
console.log(Boolean(condicaoNumberFalse));
console.log(Boolean(condicaoNumberTrue));

/** são valores falsos : NULL, UNDEFINED  */

/* Tambem podemos verificar se existe um elemento naa tela */
const existeH1 = document.querySelector("h1")
console.log(existeH1) // retorna null, então o valor vai ser FALSE
console.log(Boolean(existeH1))


// OPERADORES LÓGICOS     || (ou)   && (e)

// Aqui vai rodar, porque só é necessário ter uma das condiçoes abaixo, uma OU outra
if(existeH1 || document.querySelector("body")) {
  console.log("APROVADO")
}
// Aqui já nao acontece o mesmo pois um dos parametros nao é atingido que é o existeH1
if(existeH1 && document.querySelector("body")) {
  console.log("NAO APARECE NADA")
}

// OPERADORES DE COMPARAÇÃO   === (igual)   !==(diferente de)
const texto = document.querySelector("p").innerText
console.log(texto)

if(texto.toUpperCase === "HTML") {
  console.log("Muito bom gosto!")
}
