const element  = Array.from(document.getElementsByClassName('reveal'));
const heigthY = 400;
const heigthX = 30;
let clientY = 0;

document.addEventListener('scroll', function () {
	clientY = element[0].getBoundingClientRect().y;
	clientY > heigthX && clientY < heigthY ? element[0].className = 'reveal reveal_active' :
	element[0].className = 'reveal';
	// Не смог разобраться как можно реализовать для всех элментов массива такую логику
	clientY = element[1].getBoundingClientRect().y;
	clientY > heigthX && clientY < heigthY ? element[1].className = 'reveal reveal_active' :
	element[1].className = 'reveal';
})