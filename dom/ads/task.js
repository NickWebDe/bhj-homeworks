const arrRotator = Array.from(document.getElementsByClassName('rotator__case '));
let idx = 0;
let speed = 1000;
let color;

function rotation () {
	arrRotator[idx].className = 'rotator__case';
	idx++;
	if (idx === arrRotator.length - 1) {
		idx = 0
		};
	arrRotator[idx].className = 'rotator__case rotator__case_active';
	speed = arrRotator[idx].getAttribute('data-speed');
	color = arrRotator[idx].getAttribute('data-color');
	arrRotator[idx].style.color = color;

}

setInterval(rotation, speed)
