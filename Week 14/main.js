import { Component, createElement } from "./framework.js";

class Carousel extends Component {
  constructor() {
    super();
    this.attributes = Object.create(null);
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  render() {
    return document.createElement("div")
  }
  mounTo(parent) {
    parent.appendChild(this.render());
  }
}

let d = [
  "https://qiniu.fancyrobot.com/FoxCjpDp6X7_DOtRaHNLJgNh84GD",
  "https://qiniu.fancyrobot.com/FsiHjpArNYSr-77izdl0mWenqfvI",
  "https://qiniu.fancyrobot.com/FrK54otUOl9DnrA6iVLNNIQpJLlf",
];

let a = (
  <Carousel src={d}></Carousel>
);



a.mounTo(document.body);
