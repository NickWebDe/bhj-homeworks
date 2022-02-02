const btnSend = document.getElementById('send');

btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    const inputData = new FormData(document.getElementById('form'));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(inputData);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if(xhr.readyState === xhr.DONE) {
            alert('Загрузка успешно завершена')
        }
    }
    xhr.upload.onloadstart  = function () { // Почему то не работает событие, не могу разобраться
        console.log('Start')
    }

})
