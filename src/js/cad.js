const form = document.getElementById('form');
const message = document.getElementById('message');
const login = document.querySelector("#login");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.classList.add('show-flex')
    login.classList.add('show-block')
})


// Adicionando um evento para o envio do formulário
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Previne o recarregamento da página

  // Capturando os valores do formulário
  const usu_login = document.getElementById('apelido').value;
  const usu_nome = form.querySelector('nome"').value;
  const usu_email = form.querySelector('email').value;
  const usu_telefone = form.querySelector('tel').value;
  const usu_senha = form.querySelector('senha').value;

  // Criando o objeto com os dados do formulário
  const userData = { usu_login, usu_nome, usu_email, usu_telefone, usu_senha };

  try {
    // Enviando os dados para a API local usando fetch
    const response = await fetch('http://localhost:3333/usuarios', {
      method: 'POST', // Método HTTP
      headers: {
        'Content-Type': 'application/json', // Informando o tipo de dado enviado
      },
      body: JSON.stringify(userData), // Convertendo o objeto para JSON
    });

    // Tratando a resposta
    if (response.ok) {
      const data = await response.json();
      document.getElementById('message').innerHTML = 
        `<p>Cadastro realizado com sucesso! Bem-vindo, ${data.nome}. Faça login <a href="/index.html">aqui</a>.</p>`;
    } else {
      const error = await response.json();
      document.getElementById('message').innerHTML = 
        `<p>Erro ao cadastrar: ${error.message}</p>`;
    }
  } catch (error) {
    console.error('Erro ao se comunicar com a API:', error);
    document.getElementById('message').innerHTML = 
      `<p>Erro ao se comunicar com o servidor. Tente novamente mais tarde.</p>`;
  }
});
