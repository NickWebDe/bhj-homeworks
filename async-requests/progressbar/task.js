const form = document.getElementById('form');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = (e) => {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
    };
    xhr.upload.onload = () => {
        form.querySelector('.input__wrapper.input__wrapper-desc').textContent = 'Файл успешно загружен..';
    }
    xhr.send(new FormData(form));
})
