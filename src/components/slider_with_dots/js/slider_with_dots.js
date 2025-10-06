import { DefaultSlider } from "../../default_slider/js/default_slider";

export class SliderWithDots extends DefaultSlider {
	constructor(imgNext, imgPrev, selector, ...slides) {
		super(imgNext, imgPrev, selector, ...slides);
	}

	render() {
		super.render();

		this.sliderInner.parentElement.parentElement.classList.add('default__slider-with-dots');
	}
}