const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev'); 
const arrFix = 1; //здесь создал переменную которая отнимает от sliderItems.length еденицу ибо тогда не получается сравнение с idx
const startIdx = 0; // здесь аналогично как и выше не смог придумать более правильного решения


sliderNext.onclick = function () {
	sliderItems[idx].className = 'slider__item';
	sliderItems.findIndex(element => element.className === 'slider__item slider__item_active') === sliderItems.length - arrFix ? idx -= sliderItems.length - arrFix : idx++;
	sliderItems[idx].className = 'slider__item slider__item_active';
}

sliderPrev.onclick = function () {
	sliderItems[idx].className = 'slider__item';
	let idx = sliderItems.findIndex(element => element.className === 'slider__item slider__item_active') 
	idx === startIdx ? idx = sliderItems.length - arrFix : idx--;
	sliderItems[idx].className = 'slider__item slider__item_active';
}




