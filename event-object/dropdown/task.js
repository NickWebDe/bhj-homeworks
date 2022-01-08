const droplist  = document.querySelector('.dropdown__list');
const arrItem = Array.from(document.getElementsByClassName('dropdown__item'))
const dropValue = document.querySelector('.dropdown__value');

document.querySelector('.dropdown__value').onclick = function (element) {
	droplist.className === 'dropdown__list dropdown__list_active' ? droplist.className = 'dropdown__list'
	: droplist.className = 'dropdown__list dropdown__list_active';
}

arrItem.forEach( function (element) {
	element.onclick = function (event) {
		dropValue.textContent = event.currentTarget.textContent;
		droplist.className = 'dropdown__list';
		event.preventDefault();
	}
})