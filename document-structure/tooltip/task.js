const help = document.querySelectorAll('.has-tooltip')
const html = '<div class="tooltip">Текст подсказки</div>'; 
help.forEach((e) => {
	e.addEventListener('click', (e) => {
		e.preventDefault()
		e.currentTarget.insertAdjacentHTML('afterEnd', html);
	})

});
