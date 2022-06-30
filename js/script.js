import Slide from "./modules/Slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();

slide.changeSlide(3);
slide.activePrevSlide()
