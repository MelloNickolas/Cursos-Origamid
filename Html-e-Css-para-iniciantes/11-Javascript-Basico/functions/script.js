/* Funções são blocos de códigos que podem ser executados, eu posso
realizar uma funçao para executar somente a soma de dois numeros ou
a multiplicaçao de dois numeros */

function logCurso(){
  const nome = "JavaScript"
  console.log(nome) 
}
logCurso(); /* Para rodarmos uma função temos que escreve-la novamente */





/* Porem podemos usar as FUNCOES com ARGUMENTOS e PARAMETROS */
function logNome(nome) /*Aqui definfimos o nome como parametro*/{
  console.log(nome)
}
/* Aqui definimos os argumentos, ou seja, aqui estão sendon definidos os parametros no caso
o NOME com os argumentos seguintes, meio confuso, mas é como se o nome fosse jogado pra fora
e na hora de rodar você definiria o valor dele, isso são parametros e argumentos */
logNome("Nickolas")
logNome("Marcelo")





function logSobrenome(sobrenome){
   /* console.log(sobrenome) */
   return sobrenome
}
/* Aqui eu coloquei minha funcao em uma variavel, porem ela deu undefined, isso ocorre porque
ela nao retorna nenhum valor, mas sim um console, caso eu queira armazenar a funcao como uma
variavel, eu sempre tenho que retornar um valor, para assim a variavel ter m valor fixo e nao um console */
const retorno = logSobrenome("Passos")
console.log(retorno)




/* Lembrando que nos podemos retornar uma objeto dentro da funçao, e funciona do mesmo jeito */
function logAlmoco(comida, bebida){
  return {
    comidaAlmoco: comida,
    bebidaAlmoco: bebida
  }
}
const retornoAlmoco = logAlmoco("Feijoada", "Coca-Cola")
console.log(retornoAlmoco)
console.log(retornoAlmoco.comidaAlmoco)
