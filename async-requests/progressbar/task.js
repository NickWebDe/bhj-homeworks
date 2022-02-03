const btnSend = document.getElementById('send');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataFile = new FormData();
    dataFile.append('file',document.getElementById('file').files)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = (e) => { //Вот здесь обработчик почему то срабатывает только один раз а xhr.onprogress - работает как нужно 
        console.log(e.loaded)
    };
    xhr.send(dataFile);
})
