/* 
Nesse código nos perceboms a diferença entre LET e CONST, que basicamente consiste em ser alterado futuramente,
o CONSt não suporta esse tipo de alteração, sendo um valor constante e imutável, ja o LET, suporta esse tipo de 
alteraçao por outro valor como no exemplo abaixo:
*/

const nome = "Nickolas";
const sobrenome = "Mello";

nome = "José";
sobrenome = "Cardoso";

console.log(nome);
console.log(sobrenome);