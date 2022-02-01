const textArea = document.getElementById('editor');

textArea.addEventListener('change', (e) => {
    localStorage.setItem(textArea.id,textArea.value);
})

document.addEventListener('DOMContentLoaded', (e) => {
    textArea.value  = localStorage.getItem(textArea.id);
})

document.querySelector('.button__clear').addEventListener('click', (e) => {
    localStorage.removeItem(textArea.id);
    textArea.value = '';
})