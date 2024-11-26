const formulario = document.querySelector("form") // Estamos puxanodo o from que é o formulário da sua pagina
console.log(formulario) // mostra o formulário

// Lembrando que se estiuver na pagina de orcamento ele vai puxar o formulario do orçamento, e quando tiver
// na página de contato ele vai puxar o formulário de contato


function formularioEnviado(resposta) {
  console.log(resposta) // aqui se voce analisar o que ele te retorno vai ter o OK
  /* o OK ele basicamente fala se o envio foi concluido(true) ou nao (false) */

  if(resposta.ok) { // caso o formulario seja enviado
    formulario.innerHTML = "<p>Mensagem Enviada, m breve entraremos em contato. Geralmente respondemos em 24 horas</p>"
  } else { // caso o formulario nao seja enviado
    formulario.innerHTML = "<p>Erro no envio, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>"
  }
}


function enviarFormulario(event) {
  event.preventDefault(); // evita de mandar direto ao php, lembre-se disso quando hospedar seu site
  const botao = document.querySelector("form button")

  /* Quando apertar uma vez para enviar ele é desabilitado, isso serve para quando a pessoa clicar vvarias vezes 
  nao ser enviado varias vezes o e-mail */
  botao.disabled = true; 

  /* Para mostrar que a açao esta sendo realizada muda o texto do botao */
  botao.innerText = "Enviando..."

  /* Serve para puxar os dados que foram inseridos no seu formulário */
  const data = new FormData(formulario)
  console.log(data.get("email"))

  /* ele usa umaurl para puxar os dados de onde você esta enviando que no caso seria o nosso ./enviar.php */
  fetch("./enviar.php", {
    // agora dentro de um objeto nós vamos passar as principais propriedades que você precisa
    method: 'POST', // estamos postando, mandando essa mensagem
    body: data // puxanod o nosso formulário
  }).then(formularioEnviado) // agora quanndo esse formulario a gente usa o then para mostrar o que vai ocorrer
}


// quando mandar os dados roda a funcao, normalmente ocorre em um botão
formulario.addEventListener("submit", enviarFormulario) 