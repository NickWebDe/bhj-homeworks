const interestFood = document.querySelector('.interest__food');
const interestAnimals = document.querySelector('.interest__animals');


interestFood.addEventListener('click', (e) => {
    Array.from(interestFood.lastElementChild.getElementsByClassName('interest__check')).forEach( (element) => {
        if(element.checked) {
            element.checked = false;
        } else if (!element.checked) {
            element.checked = true;
        }
    })
})

interestAnimals.addEventListener('click', (e) => {
    Array.from(interestAnimals.lastElementChild.getElementsByClassName('interest__check')).forEach( (element) => {
        if(element.checked) {
            element.checked = false;
        } else if (!element.checked) {
            element.checked = true;
        }
    })
})