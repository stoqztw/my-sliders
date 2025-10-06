'use strict';

window.addEventListener("DOMContentLoaded", () => {
	// const slider = document.querySelector('.default__slider .slider'),
	// 	slides = slider.querySelectorAll('.slider__slide'),
	// 	btnNext = slider.querySelector('.slider__arrow-right'),
	// 	btnPrev = slider.querySelector('.slider__arrow-left'),
	// 	sliderInner = slider.querySelector('.slider__inner'),
	// 	width = window.getComputedStyle(slider).width;

	// let offset = 0;

	// btnNext.addEventListener('click', (e) => {
	// 	if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
	// 		offset = 0;
	// 	} else {
	// 		offset += +width.replace(/\D/g, '');
	// 	}

	// 	sliderInner.style.transform = `translateX(-${offset}px)`;
	// });

	// btnPrev.addEventListener('click', (e) => {
	// 	if (offset === 0) {
	// 		offset = +width.replace(/\D/g, '') * (slides.length - 1);
	// 	} else {
	// 		offset -= +width.replace(/\D/g, '');
	// 	}

	// 	sliderInner.style.transform = `translateX(-${offset}px)`;
	// });

	const titleDefaultSlider = document.querySelector('.title__default-slider');

	class DefaultSlider {
		constructor(imgNext, imgPrev, selector, ...slides) {
			this.imgNext = imgNext,
				this.imgPrev = imgPrev,
				this.selector = selector,
				this.slides = slides
		}

		render() {
			const slider = document.createElement('div');
			slider.classList.add('default__slider');

			slider.innerHTML = `
			<div class="slider">
				<div class="slider__btn-next">
					<img
						src=${this.imgNext}
						alt="right_arrow"
						class="slider__arrow slider__arrow-right"
					/>
				</div>
				<div class="slider__btn-prev">
					<img
						src=${this.imgPrev}
						alt="left-arrow"
						class="slider__arrow slider__arrow-left"
					/>
				</div>
				<div class="slider__inner">

				</div>
			</div>
			`;



			const btnNext = slider.querySelector('.slider__arrow-right'),
				btnPrev = slider.querySelector('.slider__arrow-left'),
				sliderInner = slider.querySelector('.slider__inner'),
				width = '900px';

			let offset = 0;

			this.slides.forEach((slide, id) => {
				sliderInner.innerHTML += `
				<img
					src=${slide}
					alt="slide_${id + 1}"
					class="slider__slide"
				/>
				`;
			});

			btnNext.addEventListener('click', (e) => {
				if (offset === +width.replace(/\D/g, '') * (this.slides.length - 1)) {
					offset = 0;
				} else {
					offset += +width.replace(/\D/g, '');
				}

				sliderInner.style.transform = `translateX(-${offset}px)`;
			});

			btnPrev.addEventListener('click', (e) => {
				if (offset === 0) {
					offset = +width.replace(/\D/g, '') * (this.slides.length - 1);
				} else {
					offset -= +width.replace(/\D/g, '');
				}

				sliderInner.style.transform = `translateX(-${offset}px)`;
			});

			this.selector.after(slider)
		}
	}

	new DefaultSlider(
		'/src/components/default_slider/assets/right_arrow.png',
		'/src/components/default_slider/assets/left_arrow.png',
		titleDefaultSlider,
		'/src/assets/img/slide_1.png',
		'/src/assets/img/slide_2.png',
		'/src/assets/img/slide_3.png',
		'/src/assets/img/slide_4.png',
		'/src/assets/img/slide_5.png'
	).render()

});