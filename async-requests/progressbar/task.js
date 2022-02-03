const btnSend = document.getElementById('send');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataFile = new FormData();
    dataFile.append('file',document.getElementById('file').files)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = (e) => {
        console.log(e.loaded)
    };
    xhr.send(dataFile);
})
