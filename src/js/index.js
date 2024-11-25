

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita o envio padrão do formulário
      
      // Obter os valores dos campos
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;
      
      // Montar o objeto com os dados do formulário
      const formData = {
        email,
        phone,
        password,
      };
      
      try {
        // Fazer a requisição para a API local
        const response = await fetch("http://localhost:3333/usuario/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        // Verificar a resposta da API
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log("Sucesso:", result);
  
        // Exibir uma mensagem de sucesso ou redirecionar
        alert("Login realizado com sucesso!");
      } catch (error) {
        console.error("Erro ao realizar login:", error);
        alert("Falha ao realizar login. Tente novamente.");
      }
    });
  });
  