let menuItem = Array.from(document.getElementsByClassName('menu_button'));
let item = Array.from(document.querySelectorAll('ul.menu.menu_sub'))
let company = document.getElementById('company');
let service = document.getElementById('service');


menuItem.forEach(function (element, idx) {
	element.onclick = function () {
		if(company.className === 'menu menu_sub menu_active') {
			company.className = 'menu menu_sub';			
		} else if (service.className === 'menu menu_sub menu_active') {
			service.className = 'menu menu_sub'
		}
		item[idx].className = 'menu menu_sub menu_active'
		return false;
	};
})

