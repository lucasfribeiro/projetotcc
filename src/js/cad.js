const form = document.getElementById('form');
const message = document.getElementById('message');
const login = document.getElementById('login')

form.addEventListener("submit", () => {
    message.classList.add('show-flex')
    login.classList.add('show-block')
})