const element = document.getElementsByClassName('interest__check');

element[0].addEventListener('click', () => {
	element[1].checked === false? (element[1].checked = true, element[2].checked = true) : (element[1].checked = false, element[2].checked = false);
})

element[3].addEventListener('click', () => {
	element[4].checked === false? (element[4].checked = true, element[5].checked = true) : (element[4].checked = false, element[5].checked = false);
})

