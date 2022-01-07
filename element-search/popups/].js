let modalMain = document.getElementById('modal_main');
const arrModal = Array.from(document.getElementsByClassName('modal'))
const modalClose = Array.from(document.getElementsByClassName('modal__close modal__close_times'));
const button = Array.from(document.getElementsByClassName('btn btn_danger modal__close show-success'))

modalMain.className = 'modal modal_active'; // при загрузке вывели на экран окно main

modalClose.forEach(function (element, idx) { // записали в обработчик функцию закрытия окон 
	element.onclick = function () {
		arrModal[idx].className = 'modal';
	}
})
