const tooltipElements = Array.from(document.getElementsByClassName('has-tooltip'));
const htmlSample = `<div class="tooltip" style="left: 0; top: 0">Текст подсказки</div>`;
document.querySelector('.has-tooltip').insertAdjacentHTML("beforeend", htmlSample);
const toolTip = document.querySelector('.tooltip')
const fixPositionPx = 25;


	tooltipElements.forEach((element) => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			let positionLeft = `${event.currentTarget.getBoundingClientRect().left.toFixed(0)}px`;
			if(toolTip.className === 'tooltip') {
				toolTip.className = 'tooltip tooltip_active';
				toolTip.innerText = event.currentTarget.title;
				toolTip.style.top = `${event.currentTarget.getBoundingClientRect().top + fixPositionPx}px`;
				toolTip.style.left = positionLeft;
			} else if (toolTip.style.left === positionLeft) {
				toolTip.className = 'tooltip';
			} else if (toolTip.className === 'tooltip tooltip_active') {
				toolTip.innerText = event.currentTarget.title;
				toolTip.style.top = `${event.currentTarget.getBoundingClientRect().top + fixPositionPx}px`;
				toolTip.style.left = positionLeft;
			}
		})

	})

