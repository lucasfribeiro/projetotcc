const form = document.getElementById('form');
const message = document.getElementById('message');
const login = document.querySelector("#login");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.classList.add('show-flex')
    login.classList.add('show-block')
})