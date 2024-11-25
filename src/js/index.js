const fone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

async function login(fone, email, password) {
    try {
      const response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usu_senha: password,
            usu_email: email,
            usu_fone: fone
        }),
      });

  
      if (!response.ok) {
        throw new Error('Login falhou!');
      }
    
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }