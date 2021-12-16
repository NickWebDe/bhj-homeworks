let element;
let arrHole = [];
const sizeHole = 8;
let killCount = document.getElementById('dead');
let lossCounter = document.getElementById('lost')



function getHole(index) {
	element = document.getElementById(`hole${index}`);
	return element;
};


function checkWin () {
	if (killCount.textContent === '10') {
		alert('Ура Победа!');
		killCount.textContent = '0';
	} else if (lossCounter.textContent === '5') {
		alert('Поражение, попробуйте снова! ;)')
		lossCounter.textContent = '0';
	}
}

for(let i = 0; i < sizeHole; i++) {
	element = getHole((i + 1));
    arrHole[i] = element;
    arrHole[i].onclick = function() {
    	if(arrHole[i].classList.contains('hole_has-mole')) {
    	killCount.textContent ++; /* Здесь скорее всего я сделал костыль ввиду того, что происходит неявное преобразование
    	получается JS сам преобразует строку в число для сложения. По правильному здесь нужно было бы превести строку через
    	метод .Number() но в таком случае пришлось бы делать еще одну лишню перменную, как лучше быть в таких ситуациях? */
    	checkWin();
    	return;
    }
    
    lossCounter.textContent ++;
    checkWin()
  }
  
 }

