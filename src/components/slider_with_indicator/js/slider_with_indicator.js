import { SliderWithDots } from "../../slider_with_dots/js/slider_with_dots";

export class SliderWithIndicator extends SliderWithDots {
	constructor(imgNext, imgPrev, selector, ...slides) {
		super(imgNext, imgPrev, selector, ...slides);
	}

	render() {
		super.render();

		this.sliderInner.parentElement.parentElement.classList.remove('default__slider-with-dots');
		this.sliderInner.parentElement.parentElement.classList.add('default__slider-with-indicator');
	}

	addDots() {
		super.addDots();
	}

	addIndicator() {
		
	}
}