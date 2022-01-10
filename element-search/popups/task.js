const sliderItems = Array.from(document.getElementsByClassName('slider__arrow'))

let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let buttonSucess = document.querySelector('.btn_success');
const arrModal = Array.from(document.getElementsByClassName('modal'))
const modalClose = Array.from(document.getElementsByClassName('modal__close modal__close_times'));
const button = Array.from(document.getElementsByClassName('btn btn_danger modal__close show-success'));

modalMain.className = 'modal modal_active'; 

modalClose.forEach(function (element, idx) { 
	element.onclick = function () {
		arrModal[idx].className = 'modal';
	}
})

button.forEach(element => element.onclick = function () {
	modalMain.className = 'modal';
	modalSuccess.className = 'modal modal_active';
})

buttonSucess.onclick = function () {
	modalSuccess.className = 'modal';
}
