const items = document.getElementById('items');
document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', " https://netology-slow-rest.herokuapp.com");
    xhr.send()
    xhr.onreadystatechange = function () {
        if(xhr.readyState === xhr.DONE) {
            document.querySelector('.loader').className = 'loader';
            let element = JSON.parse(xhr.response).response.Valute;
            for(let prop in element) {
                let html = `<div class="item">
                <div class="item__code">`+`${prop}`+`</div>
                <div class="item__value">`+` ${element[prop].Value}`+ `</div>
                <div class="item__currency">руб.</div>;
                </div>`
                items.insertAdjacentHTML('beforeend', html)
            }
        }
    }
})