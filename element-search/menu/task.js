let menuItem = Array.from(document.getElementsByClassName('menu__link'));
let item = Array.from(document.querySelectorAll('ul.menu.menu_sub'))

for (let i = 0; i < menuItem.length; i++) {
	menuItem[i].onclick = function () {
		if(menuItem[i].textContent === 'О компании') {
		item[0].className = 'menu menu_sub menu_active';
		return false;
	} else if (menuItem[i].textContent === 'Услуги') {
		item[1].className = 'menu menu_sub menu_active';
		return false;
	}
}
}
