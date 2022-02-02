const poolAnswer = document.getElementById('poll__answers');
const poolTitle = document.getElementById('poll__title');

document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            let element = JSON.parse(xhr.response).data;
            poolTitle.innerText = element.title;
            poolAnswer.innerHTML = `<button class="poll__answer">d</button>
                  <button class="poll__answer">a</button>
                  <button class="poll__answer">?</button>`;
            const poolElements = Array.from(document.getElementsByClassName('poll__answer'));
            poolElements.forEach((e, idx) => {
                e.innerText = element.answers[idx];
            })

            Array.from(document.getElementsByTagName('button')).forEach((element) => {
                element.addEventListener('click', () => {
                    document.getElementById('subscribe-modal').className = 'modal modal__active';
                })
            });

            document.querySelector('.modal__close.modal__close_times').addEventListener('click', () => {
                document.getElementById('subscribe-modal').className = 'modal';
            })
            }
        }
})



