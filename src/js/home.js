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



