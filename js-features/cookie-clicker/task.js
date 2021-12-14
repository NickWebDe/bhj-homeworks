const counter = document.getElementById('clicker__counter');
let click = Number(counter.textContent);

const cookie = document.getElementById('cookie');

cookie.onclick = () => {
	click++;
	counter.textContent = click;
	if(cookie.width === 250) {
		cookie.width = '200';
	} else if (cookie.width === 200) {
		cookie.width = '250';
	};

};

