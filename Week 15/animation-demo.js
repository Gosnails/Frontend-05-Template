import {
    Timeline,
    Animation
} from "./animation.js";
import {
    easeIn
} from "./ease.js";

let tl = new Timeline();
tl.start();
tl.add(new Animation(document.querySelector("#el").style, "transform", 0, 500, 2000, 0, easeIn, v => `translateX(${v}px)`));
document.querySelector("#pause").addEventListener('click', () => tl.pause());
document.querySelector("#resume").addEventListener('click', () => tl.resume());

document.querySelector("#el2").style.transition = 'transform ease-in 2s';
document.querySelector("#el2").style.transform = 'translate(500px)';