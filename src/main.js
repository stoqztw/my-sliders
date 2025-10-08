
// import('/src/components/default_slider/js/default_slider.js');

import { DefaultSlider } from "./components/default_slider/js/default_slider";
import { SliderWithDots } from "./components/slider_with_dots/js/slider_with_dots";
import { SliderWithIndicator } from "./components/slider_with_indicator/js/slider_with_indicator";

window.addEventListener('DOMContentLoaded', () => {
	const titleDefaultSlider = document.querySelector('.title__default-slider'),
		titleSliderWithDots = document.querySelector('.title__slider-with-dots'),
		titleSliderWithIndicator = document.querySelector('.title__slider-with-indicator');

	new DefaultSlider(
		'/src/components/default_slider/assets/right_arrow.png',
		'/src/components/default_slider/assets/left_arrow.png',
		titleDefaultSlider,
		'/src/assets/img/slide_1.png',
		'/src/assets/img/slide_2.png',
		'/src/assets/img/slide_3.png',
		'/src/assets/img/slide_4.png',
		'/src/assets/img/slide_5.png'
	).render();

	const sliderWithDots = new SliderWithDots(
		'/src/components/default_slider/assets/right_arrow.png',
		'/src/components/default_slider/assets/left_arrow.png',
		titleSliderWithDots,
		'/src/assets/img/slide_1.png',
		'/src/assets/img/slide_2.png',
		'/src/assets/img/slide_3.png',
		'/src/assets/img/slide_4.png',
		'/src/assets/img/slide_5.png'
	);
	sliderWithDots.render();
	sliderWithDots.addDots();

	const sliderWithIndicator = new SliderWithIndicator(
		'/src/components/default_slider/assets/right_arrow.png',
		'/src/components/default_slider/assets/left_arrow.png',
		titleSliderWithIndicator,
		'/src/assets/img/slide_1.png',
		'/src/assets/img/slide_2.png',
		'/src/assets/img/slide_3.png',
		'/src/assets/img/slide_4.png',
		'/src/assets/img/slide_5.png'
	);

	sliderWithIndicator.render();
});