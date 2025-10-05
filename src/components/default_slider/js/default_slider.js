'use strict';

window.addEventListener("DOMContentLoaded", () => {
	const slider = document.querySelector('.default__slider .slider'),
		slides = slider.querySelectorAll('.slider__slide'),
		btnNext = slider.querySelector('.slider__arrow-right'),
		btnPrev = slider.querySelector('.slider__arrow-left'),
		sliderInner = slider.querySelector('.slider__inner'),
		width = window.getComputedStyle(slider).width;

	let offset = 0;

	btnNext.addEventListener('click', (e) => {
		if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.replace(/\D/g, '');
		}

		sliderInner.style.transform = `translateX(-${offset}px)`;
	});

	btnPrev.addEventListener('click', (e) => {
		if (offset === 0) {
			offset = +width.replace(/\D/g, '') * (slides.length - 1);
		} else {
			offset -= +width.replace(/\D/g, '');
		}

		sliderInner.style.transform = `translateX(-${offset}px)`;
	});
})






