// Modal de sucesso

const closeSucess = document.getElementById('close_sucess');
const modalSucess = document.getElementById('modal_sucess');

closeSucess.addEventListener("click", () => {
  modalSucess.style.display = "none"
})

// Abrir e fechar sidebar

const openSidebar = document.getElementById('menu_btn');
const closeSidebar = document.getElementById('close_sidebar');

const sidebar = document.getElementById("sidebar")

openSidebar.addEventListener("click", () => {
  sidebar.style.display = "block"
})

closeSidebar.addEventListener("click", () => {
  sidebar.style.display = "none"
})

// Transição de telas

const Home = document.getElementById('home_page');
const Receitas = document.getElementById('receitas_page');
const Lembretes = document.getElementById('lembretes_page');
const Perfil = document.getElementById('perfil_page');
const Desempenho = document.getElementById('desempenho_page');
const Options = document.getElementById('options_page');

const homeBtn = document.getElementById('home');
const receitasBtn = document.getElementById('receitas');
const lembretesBtn = document.getElementById('lembretes');
const perfilBtn = document.getElementById('perfil');
const desempenhoBtn = document.getElementById('desempenho');
const optionsBtn = document.getElementById('options');

homeBtn.addEventListener("click", () => {

  homeBtn.classList.add("active");

  receitasBtn.classList.remove("active");
  lembretesBtn.classList.remove("active");
  perfilBtn.classList.remove("active");
  desempenhoBtn.classList.remove("active");
  optionsBtn.classList.remove("active");

  Home.style.display = "block";

  Receitas.style.display = "none";
  Lembretes.style.display = "none";
  Perfil.style.display = "none";
  Desempenho.style.display = "none";
  Options.style.display = "none";
})

receitasBtn.addEventListener("click", () => {

  receitasBtn.classList.add("active");

  homeBtn.classList.remove("active");
  lembretesBtn.classList.remove("active");
  perfilBtn.classList.remove("active");
  desempenhoBtn.classList.remove("active");
  optionsBtn.classList.remove("active");

  Receitas.style.display = "block";

  Home.style.display = "none";
  Lembretes.style.display = "none";
  Perfil.style.display = "none";
  Desempenho.style.display = "none";
  Options.style.display = "none";
})

lembretesBtn.addEventListener("click", () => {

  lembretesBtn.classList.add("active");

  homeBtn.classList.remove("active");
  receitasBtn.classList.remove("active");
  perfilBtn.classList.remove("active");
  desempenhoBtn.classList.remove("active");
  optionsBtn.classList.remove("active");

  Lembretes.style.display = "block";

  Home.style.display = "none";
  Receitas.style.display = "none";
  Perfil.style.display = "none";
  Desempenho.style.display = "none";
  Options.style.display = "none";
})

perfilBtn.addEventListener("click", () => {

  perfilBtn.classList.add("active");

  homeBtn.classList.remove("active");
  receitasBtn.classList.remove("active");
  lembretesBtn.classList.remove("active");
  desempenhoBtn.classList.remove("active");
  optionsBtn.classList.remove("active");

  Perfil.style.display = "block";

  Home.style.display = "none";
  Receitas.style.display = "none";
  Lembretes.style.display = "none";
  Desempenho.style.display = "none";
  Options.style.display = "none";

  
})

desempenhoBtn.addEventListener("click", () => {

  desempenhoBtn.classList.add("active")

  homeBtn.classList.remove("active");
  receitasBtn.classList.remove("active");
  perfilBtn.classList.remove("active");
  lembretesBtn.classList.remove("active");
  optionsBtn.classList.remove("active");

  Desempenho.style.display = "block";

  Home.style.display = "none";
  Receitas.style.display = "none";
  Lembretes.style.display = "none";
  Perfil.style.display = "none";
  Options.style.display = "none";
})

optionsBtn.addEventListener("click", () => {

  optionsBtn.classList.add("active")
  homeBtn.classList.remove("active");
  receitasBtn.classList.remove("active");
  perfilBtn.classList.remove("active");
  lembretesBtn.classList.remove("active");
  desempenhoBtn.classList.remove("active");

  Options.style.display = "block";

  Home.style.display = "none";
  Receitas.style.display = "none";
  Lembretes.style.display = "none";
  Perfil.style.display = "none";
  Desempenho.style.display = "none";
})

// Modal perfil 

const editPerfil = document.getElementById("edit_perfil");
const closeModalPerfil = document.getElementById("close_perfil");
const modalPerfil = document.getElementById("modal_perfil");
const confirm = document.getElementById("confirm");
const cancel = document.getElementById("cancel");

editPerfil.addEventListener("click", () => {
  modalPerfil.style.display = "flex"
})

closeModalPerfil.addEventListener("click", () => {
  modalPerfil.style.display = "none"
})

// Gráficos

var options = {
  series: [{
    name: "Valor",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 200, 120, 46]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Saldos por mês',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Modais de informações

const inicioOpt = document.getElementById("inicio_opt");
const inicioOptBtn = document.getElementById("home_option");
const closeinicioOpt = document.getElementById("close_inicio");

inicioOptBtn.addEventListener("click", () => {
  inicioOpt.style.display = "flex"
})

closeinicioOpt.addEventListener("click", () => {
  inicioOpt.style.display = "none"
})

const receitasOpt = document.getElementById("receitas_opt");
const receitasOptBtn = document.getElementById("receitas_option");
const closereceitasOpt = document.getElementById("close_receitas");

receitasOptBtn.addEventListener("click", () => {
  receitasOpt.style.display = "flex"
})

closereceitasOpt.addEventListener("click", () => {
  receitasOpt.style.display = "none"
})

const lembretesOpt = document.getElementById("lembretes_opt");
const lembretesOptBtn = document.getElementById("lembretes_option");
const closelembretesOpt = document.getElementById("close_lembretes");

lembretesOptBtn.addEventListener("click", () => {
  lembretesOpt.style.display = "flex"
})

closelembretesOpt.addEventListener("click", () => {
  lembretesOpt.style.display = "none"
})

const desempenhoOpt = document.getElementById("desempenho_opt");
const desempenhoOptBtn = document.getElementById("desempenho_option");
const closedesempenhoOpt = document.getElementById("close_desempenho");

desempenhoOptBtn.addEventListener("click", () => {
  desempenhoOpt.style.display = "flex"
})

closedesempenhoOpt.addEventListener("click", () => {
  desempenhoOpt.style.display = "none"
})

const perfilOpt = document.getElementById("perfil_opt");
const perfilOptBtn = document.getElementById("perfil_option");
const closeperfilOpt = document.getElementById("close_perfil_modal");

perfilOptBtn.addEventListener("click", () => {
  perfilOpt.style.display = "flex"
})

closeperfilOpt.addEventListener("click", () => {
  perfilOpt.style.display = "none"
})

// Listar informações no perfil



<<<<<<< HEAD
=======
function addDespesas(e) {
  e.preventDefault();

  // alterar datas

  const dataVencimento = document.getElementById('venci').value;

  const [anoV, mesV, diaV] = dataVencimento.split('-');
  const formatoVencimento = `${diaV}/${mesV}/${anoV}`

  const dataPagamento = document.getElementById('pag').value;

  const [anoP, mesP, diaP] = dataPagamento.split('-');
  const formatoPagamento = `${diaP}/${mesP}/${anoP}`

  const nomeDesp = document.getElementById('nome').value;
  const valorDesp = parseFloat(document.getElementById('valor').value);
  const multaDesp = parseFloat(document.getElementById('multa').value);
  const descDesp = parseFloat(document.getElementById('desconto').value);
  const jurosDesp = parseFloat(document.getElementById('juros').value);

  const totalDesp = valorDesp + multaDesp - descDesp + jurosDesp

  const despesas = {
    id: Date.now(),
    nome: nomeDesp,
    valor: valorDesp,
    vencimento: formatoVencimento,
    pagamento: formatoPagamento,
    multa: multaDesp,
    desconto: descDesp,
    juros: jurosDesp,
    total: totalDesp
  }

  despesa.push(despesas)
  document.querySelector('.input-area-desp').reset();
  listarDespesa()
  calcTotal()
  // console.log(despesas)

}

function listarDespesa() {

  const listaDesp = document.querySelector('.info-desp');
  listaDesp.innerHTML = ''

  despesa.forEach(despesas => {
    const row = document.createElement('div');

    row.innerHTML = `
      <div class="info-content">

              <div class="desp">
                <label>Nome:</label>
                <span>${despesas.nome}</span>
              </div>

              <div class="desp">
                <label>Valor:</label>
                <span>R$ ${despesas.valor.toFixed(2)}</span>
              </div>

              <div class="desp">
                <label>Vencimento:</label>
                <span>${despesas.vencimento}</span>
              </div>

              <div class="desp">
                <label>Pagamento:</label>
                <span>${despesas.pagamento}</span>
              </div>

              <div class="desp">
                <label>Multa:</label>
                <span>R$ ${despesas.multa.toFixed(2)}</span>
              </div>

              <div class="desp">
                <label>Juros:</label>
                <span>R$ ${despesas.juros.toFixed(2)}</span>
              </div>

              <div class="desp">
                <label>Desconto:</label>
                <span>R$ ${despesas.desconto.toFixed(2)}</span>
              </div>

              <div class="buttons-desp">
                <button id="delete_desp" title="Excluir" onClick="apagarDespesa(${despesas.id})">
                  <i class='bx bx-trash'></i>
                </button>
                <button id="edit_desp" title="Editar" onClick="editarDespesa(${despesas.id})">
                  <i class='bx bx-pencil'></i>
                </button>
              </div>

            </div>
      `;

    listaDesp.appendChild(row)
  })
}

function calcTotal() {
  const totalDesp = despesa.reduce((total, despesas) => total + despesas.total, 0);
  document.getElementById('total_desp').innerText = totalDesp.toFixed(2);
}

function apagarDespesa(id) {
  despesa = despesa.filter(despesas => despesas.id !== id);
  listarDespesa();
  calcTotal();
}

function editarDespesa(id) {
  const despesas = despesa.find(despesas => despesas.id == id);

  document.getElementById('nome').value = despesas.nome;
  document.getElementById('valor').value = despesas.valor;
  document.getElementById('venci').value = despesas.vencimento;
  document.getElementById('pag').value = despesas.pagamento;
  document.getElementById('multa').value = despesas.multa;
  document.getElementById('desconto').value = despesas.desconto;
  document.getElementById('juros').value = despesas.juros;

  apagarDespesa(id)
}

// Receitas

let receitaFixa = []

document.getElementById('form_fixa').addEventListener('submit', addFixa);

function addFixa(event){
  event.preventDefault();

  const valorFixa = document.getElementById('value_fixa').value;
  const selectFixa = document.getElementById('select_fixa').value;

   const fixa = {
     id: Date.now(),
     valor: valorFixa,
     descricao: selectFixa
   }

  //  console.log(fixa)
   receitaFixa.push(fixa)
   document.getElementById("form_fixa").reset();
}








document.getElementById("submit").addEventListener("click", async (event) => {
  event.preventDefault(); // Impede o comportamento padrão do botão

  // Captura os dados dos campos do formulário
  const rec_descricao = document.getElementById("select_extra").value.trim();
  const rec_data_receber = document.getElementById("").value.trim();
  const rec_valor = document.getElementById("value_fixa").value.trim();

  // Valida se todos os campos foram preenchidos
  if (!rec_descricao || !rec_data_receber || !rec_valor ) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  // Cria o payload para enviar à API
  const usuario = {
    rec_descricao,
    rec_data_receber,
    rec_valor,
  };

  try {
      // Faz a requisição para a API local
      const response = await fetch("http://localhost:3333/receitas", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
      });

      // Verifica a resposta da API
      if (response.ok) {
          const data = await response.json();


          
          Toastify({
            text: "Cadastro realizado com sucesso!",
            duration: 800,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#0bbe50",
            },
          }).showToast();


          console.log("Usuário cadastrado:", data);
          // Limpa o formulário após o cadastro bem-sucedido
          document.getElementById("select_extra").value = "";
          document.getElementById("").value = "";
          document.getElementById("value_fixa").value = "";

      } else {
          const errorData = await response.json();
          alert(`Erro ao cadastrar: ${errorData.message || "Erro desconhecido"}`);
      }
  } catch (error) {
      console.error("Erro ao realizar a requisição:", error);
      alert("Erro ao conectar-se à API. Verifique sua conexão.");
  }
});


>>>>>>> aafffbdf2218b0dc46a6071b63ea13dc5ab0a259
