const nome = "Nickolas";

/* Dentro de uma funçao eu posso puxar valores que estao fora dela e usar dentro da propria,
porem e se eu quiser usar o valor de uma funcao dentro de outra? */
function logNome(){
  console.log(nome)
}
logNome()

/* Aqui ele vai dar prioridade ao nome que foi definido dentro do escopo dela(dentro da funcao),
para retronar esse nome vamos fazer o seguinte: */
function logNome2(){
  const nome = "Jose"
  console.log(nome)
  return nome /* Vamos colocar esse return pois vamos armazenar a funcao em uma variavel. */
}
logNome2()
const nome2 = logNome2() /* Armazenamos em uma variavel, agora temos o nome que definimos no escopo da funcao */
console.log(nome2)

