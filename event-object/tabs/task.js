const tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));
let idxContent;

tab.forEach( function(element, ixd) {
	element.onclick = function (e) {
		idxContent = tab.indexOf(element);
		tab.forEach(element => element.className = 'tab');
		tab[idxContent].className = 'tab tab_active';
		tabContent.forEach(element => element.className = 'tab__content');
        tabContent[idxContent].className = 'tab__content tab__content_active';
	}
})


