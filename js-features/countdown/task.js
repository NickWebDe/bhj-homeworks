const elementValue = document.getElementById('timer');
const linkFile = document.getElementById('link');

let timerValue = Number(elementValue.textContent);

function saleTimer () {
	if(timerValue === 0){
		clearInterval(timerId);
		alert('Вы победили в конкурсе!');
		linkFile.click
		linkFile.click();
		return;
	};

	timerValue--;
	elementValue.textContent = timerValue;
	
};

let timerId = setInterval(saleTimer, 10);

timerId;


