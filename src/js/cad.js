document.getElementById("submit").addEventListener("click", async (event) => {
  event.preventDefault(); // Impede o comportamento padrão do botão

  // Captura os dados dos campos do formulário
  const usu_login = document.getElementById("apelido").value.trim();
  const usu_nome = document.getElementById("nome").value.trim();
  const usu_email = document.getElementById("email").value.trim();
  const usu_fone = document.getElementById("tel").value.trim();
  const usu_senha = document.getElementById("senha").value.trim();

  // Valida se todos os campos foram preenchidos
  if (!usu_login || !usu_nome || !usu_email || !usu_fone || !usu_senha) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  // Cria o payload para enviar à API
  const usuario = {
      usu_login,
      usu_nome,
      usu_email,
      usu_fone,
      usu_senha,
  };

  try {
      // Faz a requisição para a API local
      const response = await fetch("http://localhost:3333/usuario", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
      });

      // Verifica a resposta da API
      if (response.ok) {
          const data = await response.json();
          alert("Usuário cadastrado com sucesso!");
          console.log("Usuário cadastrado:", data);
          // Limpa o formulário após o cadastro bem-sucedido
          document.getElementById("apelido").value = "";
          document.getElementById("nome").value = "";
          document.getElementById("email").value = "";
          document.getElementById("tel").value = "";
          document.getElementById("senha").value = "";
      } else {
          const errorData = await response.json();
          alert(`Erro ao cadastrar: ${errorData.message || "Erro desconhecido"}`);
      }
  } catch (error) {
      console.error("Erro ao realizar a requisição:", error);
      alert("Erro ao conectar-se à API. Verifique sua conexão.");
  }
});
