import { DefaultSlider } from "../../default_slider/js/default_slider";

export class SliderWithIndicator extends DefaultSlider {
	constructor(imgNext, imgPrev, selector, ...slides) {
		super(imgNext, imgPrev, selector, ...slides);
	}
}