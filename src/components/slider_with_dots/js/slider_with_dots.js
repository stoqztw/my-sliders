import { DefaultSlider } from "../../default_slider/js/default_slider";

export class SliderWithDots extends DefaultSlider {
	constructor(imgNext, imgPrev, selector, ...slides) {
		super(imgNext, imgPrev, selector, ...slides);
	}

	render() {
		super.render();

		this.sliderInner.parentElement.parentElement.classList.add('default__slider-with-dots');
	}

	addDots() {
		const dotsContainer = document.createElement('div');
		dotsContainer.style = `
			display: flex;
			position: absolute;
			bottom: 5px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1000;
			column-gap: 10px;
		`;

		for (let i = 0; i < this.slides.length; i++) {
			let dot = document.createElement('div');
			dot.style = `
				display: block;
				width: 25px;
				height: 5px;
				background-color: white;
				opacity: .5;
				cursor: pointer;
			`;
			dot.setAttribute('data-slide-to', i + 1);
			dotsContainer.append(dot);
		}

		function activeDot(dot) {
			dots.forEach(dot => dot.style.opacity = '.5');
			dot.style.opacity = '1';
		}

		this.sliderInner.after(dotsContainer);
		const dots = document.querySelectorAll('[data-slide-to]');

		activeDot(dots[0]);

		dots.forEach((dot, id) => {
			dot.addEventListener('click', () => {
				this.offset = +this.width.replace(/\D/g, '') * (+dot.getAttribute('data-slide-to') - 1);
				this.sliderInner.style.transform = `translateX(-${this.offset}px)`;

				activeDot(dot);
			});
		});

		this.btnNext.addEventListener('click', () => {
			activeDot(dots[this.slideIndex - 1]);
		});

		this.btnPrev.addEventListener('click', () => {
			activeDot(dots[this.slideIndex - 1]);
		});
	}
}