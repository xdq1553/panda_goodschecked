import {render} from "react-dom"
import { App } from "./app"

// 引入样式文件
require("./css/base.css")
require("./less/style.less")
require("./less/category.less")
require("./less/collect.less")

let w = document.documentElement.clientWidth;
//计算rem
let fs = w / 1080*100;
document.documentElement.style.fontSize = `${fs}px`;
render(<App />,document.getElementById("app"));
