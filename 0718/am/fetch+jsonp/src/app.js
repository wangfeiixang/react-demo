
require("./styles/app.scss")


///////////////



import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from './scripts/components/RootComponent'
import MainComponent from './scripts/components/MainComponent'
import FindComponent from './scripts/components/FindComponent'
import OrderComponent from './scripts/components/OrderComponent'
import MineComponent from './scripts/components/MineComponent'
import SearchComponent from './scripts/components/SearchComponent'
import ClassifyComponent from './scripts/components/ClassifyComponent'
//<IndexRedirect to="/main"/>
ReactDOM.render(
	
	<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
			<IndexRoute component={MainComponent} />
			<Route path="main" component={MainComponent}></Route>
			<Route path="find" component={FindComponent}></Route>
			<Route path="order" component={OrderComponent}></Route>
			<Route path="mine" component={MineComponent}></Route>
			<Route path="search" component={SearchComponent}></Route>
			<Route path="classify/:wd" component={ClassifyComponent}></Route>
			<Route path="*" component={MainComponent}></Route>
		</Route>
	</Router>
	
	,document.getElementById("root"))
//<Router history={hashHistory}>
//		<Route path="/" component={RootComponent}>
//			<IndexRoute component={MainComponent} />
//			<Route path="main" component={MainComponent}></Route>
//			<Route path="find" component={FindComponent}></Route>
//			<Route path="order" component={OrderComponent}></Route>
//			<Route path="mine" component={MineComponent}>
//				<IndexRoute component={AComponent} />
//				<Route path="a" component={AComponent}></Route>
//				<Route path="b" component={BComponent}></Route>
//			</Route>
//		</Route>
//	</Router>


//$.ajax({
//	url:"http://localhost:9000/index/getMenu?select=1_1",
//	success:function(data){
//		console.log(data)
//	}
//})

import Get from './scripts/fetch/get'
import Post from './scripts/fetch/post'

//Get("./abc.json",{
//	a:1,b:2
//})
//	.then((res)=>{
//		console.log(res.status)
////		return res.text()
//		return res.json()
//	})
//	.then((data)=>{
//		data.push('milk')
//		return data
//		
//	})
//	.then((data)=>{
////		console.log(data)
//	})


//Post("./abc.json",{
//	a:1,b:2
//})
//	.then((res)=>{
//		return res.json()
//	})
//	.then((data)=>{
//		console.log(data)
//	})



import json from 'jsonp'
    

json('https://api.asilu.com/weather/?city=北京',{
	param:'callback',
	prefix:'ghb',
	name:'ghb'+Date.now()
},(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
	
})


Get("./juanpi.json").then((res)=>{return res.json()}).then((data)=>{
		console.log(data)
})
