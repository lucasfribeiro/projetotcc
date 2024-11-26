
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita o envio padrão do formulário
      
      // Obter os valores dos campos
      const usu_email = document.getElementById("email").value;
      const usu_fone = document.getElementById("phone").value;
      const usu_senha = document.getElementById("password").value;
      
      // Montar o objeto com os dados do formulário
      const formData = {
        usu_email,
        usu_fone,
        usu_senha,
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
        
        Toastify({
          text: "Login realizado com sucesso!",
          duration: 800,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#0bbe50",
          },
        }).showToast();

        setTimeout(() => {
          window.location.href = "./src/home/home.html"; // Caminho para a página desejada
        }, 800);

      } catch (error) {
        console.error("Erro ao realizar login:", error);
        Toastify({
          text: "Falha ao realizar o Login. Tente novamente.",
          duration: 1000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#de212e",
          },
        }).showToast();
      }
    });
  });
  