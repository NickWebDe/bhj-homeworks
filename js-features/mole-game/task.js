let element;
const sizeHole = 9;

function getHole(index) {
	element = document.getElementById(`hole${index}`);
	return element;
};

for(let i = 1; i < sizeHole; i++) {
	element = getHole(i);
	console.log(element);
	element.onclick = function() {
		console.log(`клик ${element}`) //Здесь у меня выводится элемент с классом holle8 хотя по моей задумке должен выводится элемент на который кликаю
    if(element.classList.contains('hole_has-mole')) {
    	console.log('Попадание');
    }
  }
}

