const slrArr = Array.from(document.getElementsByClassName('slider__item'));
const sliderPrev = document.querySelector('.slider__arrow_prev'); 


document.querySelector('.slider__arrow_next').addEventListener('click', (e) => {
    let slideActive = slrArr.findIndex( (e) => e.className === 'slider__item slider__item_active');
	slrArr[slideActive].className = 'slider__item';
	slideActive === slrArr.length -1 ? slideActive = slrArr.length - slrArr.length : slideActive + 1;
	slrArr[slideActive + 1].className = 'slider__item slider__item_active'
});



document.querySelector('.slider__arrow_prev').addEventListener('click', (e) => {
    let slideActive = slrArr.findIndex( (e) => e.className === 'slider__item slider__item_active');
	slrArr[slideActive].className = 'slider__item';
	slideActive ===  slrArr.length - slrArr.length ? slideActive = slrArr.length : slideActive - 1;
	slrArr[slideActive - 1].className = 'slider__item slider__item_active'
});


