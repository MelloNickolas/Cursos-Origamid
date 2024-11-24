/*
1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
2 - No corpo da função:
 2.1 - Transforme o nome para letra maiúscula: toUpperCase()
 2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
 2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
 2.4 - Coloque os 3 valores acima em um objeto.
3 - Retorne (return) o objeto definido.
4 - Execute a função com os seguintes argumentos:
    'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
5 - Guarde o retorno da função executada em uma variável.
6 - Log a frase final da função executada no console.
*/

function livro(nome, ano, autor){
  const nomeMaiuscula = nome.toUpperCase()
  const totalAnos = 2050 - ano
  const frase = nome + ' por ' + autor
  const objeto = {
    nome: nomeMaiuscula,
    totalAnos,
    frase
  }
  return objeto
}
const retorno = livro("O Senhor dos Aneis", 1954, "J. R. R. Tolkien")
console.log(retorno)