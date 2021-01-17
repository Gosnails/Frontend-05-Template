import {
  Component,
  createElement
} from "./framework.js";
import {Carousel} from "./carousel.js";
import { Timeline, Animation} from "./animation.js";

let d = [
  "https://qiniu.fancyrobot.com/FoxCjpDp6X7_DOtRaHNLJgNh84GD",
  "https://qiniu.fancyrobot.com/FsiHjpArNYSr-77izdl0mWenqfvI",
  "https://qiniu.fancyrobot.com/FrK54otUOl9DnrA6iVLNNIQpJLlf",
];

let a = (<Carousel src={d}></Carousel>);

a.mounTo(document.body);


tl.start();