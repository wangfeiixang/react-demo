
require("./styles/app.css")
require("./styles/app.scss")

//入口文件，不能当做单纯的js

//var React = require('react')
//
//var ReactDOM = require("react-dom")


var RootComponent = require("./scripts/components/RootComponent")


ReactDOM.render(<RootComponent/>,document.getElementById("root"))


