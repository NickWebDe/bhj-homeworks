const textArea = document.getElementById('editor');

textArea.addEventListener('change', () => {
    localStorage.setItem(textArea.id,textArea.value);
})

document.addEventListener('DOMContentLoaded', () => {
    textArea.value  = localStorage.getItem(textArea.id);
})

document.querySelector('.button__clear').addEventListener('click', () => {
    localStorage.removeItem(textArea.id);
    textArea.value = '';
})