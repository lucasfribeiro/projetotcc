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
