const slide = Array.from(document.getElementsByClassName('slider__item'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
let slideItem = 0;

sliderNext.onclick = function () {
	slideItem ++;
	slide.forEach(element => element.className = 'slider__item');
	slide[slideItem].className = 'slider__item slider__item_active';
	if(slideItem === 4) {
		slideItem = 0;
		slide[slideItem].className = 'slider__item slider__item_active';
	}
}

sliderPrev.onclick = function () {
	slideItem --;
	slide.forEach(element => element.className = 'slider__item');
	slide[slideItem].className = 'slider__item slider__item_active';
	if(slideItem === 0) {
		slideItem = 4;
		slide[slideItem].className = 'slider__item slider__item_active';
	}
}


