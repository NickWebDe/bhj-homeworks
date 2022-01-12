let menuItem = Array.from(document.getElementsByClassName('menu_button'));
let item = Array.from(document.querySelectorAll('ul.menu.menu_sub'))
let company = document.getElementById('company');
let service = document.getElementById('service');

menuItem.forEach( function (element, idx) {
element.onclick = function (e) {
	item[idx].className === 'menu menu_sub menu_active' ? item[idx].className = 'menu menu_sub'
	: item[idx].className = 'menu menu_sub menu_active';
	e.preventDefault();
}
})
