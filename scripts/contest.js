const scriptUrl = 'https://script.google.com/macros/s/AKfycbwpMMfYjz96PQizIR8O0lG9FYdVRXMVqoWoXt-hta1JLgeq0XW3FsVB7RPei-NPCsHH/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
        .then(response => console.log("Success!", response))
        .catch(error => console.log("Error", error.message));
})
