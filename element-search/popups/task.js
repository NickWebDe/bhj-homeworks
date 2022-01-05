let modalArr = document.getElementsByTagName('div');
let button = document.getElementsByTagName('a');


modalArr[1].className = 'modal modal_active';
button[1].onclick = function () {
	modalArr[4].className = 'modal modal_active';
};

modalArr[3].onclick = function () {
	modalArr[1].className = 'modal';
};

modalArr[6].onclick = function () {
	modalArr[4].className = 'modal';
	modalArr[1].className = 'modal';
};
