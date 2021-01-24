import {
  Component,
  createElement
} from "./framework.js";
import {Carousel} from "./carousel.js";
import {Button} from "./button.js";
import {List} from "./list.js";
import { Timeline, Animation} from "./animation.js";

let d = [
  { img: "https://qiniu.fancyrobot.com/FoxCjpDp6X7_DOtRaHNLJgNh84GD",
    url: "https://www.baidu.com",
    title: "蜗蜗"
  },
  {
    img: "https://qiniu.fancyrobot.com/FsiHjpArNYSr-77izdl0mWenqfvI",
    url: "https://www.baidu.com",
    title: "蜗蜗"
  },
  {
    img: "https://qiniu.fancyrobot.com/FrK54otUOl9DnrA6iVLNNIQpJLlf",
    url: "https://www.baidu.com",
    title: "蜗蜗"
  },
];

let a = (<Carousel 
  src={d} 
  onChange={event => console.log(event.detail.position)}
  onClick={event => window.location.href = event.detail.data.url}
  ></Carousel>);

// let a = (<List data={d}>
//     {(record) => {
//       return (<div>
//         <img src={record.img} />
//         <a href={record.url}>{record.title}</a>
//       </div>)
//     }}
// </List>)

a.mounTo(document.body);