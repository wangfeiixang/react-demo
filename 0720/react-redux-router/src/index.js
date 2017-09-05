
require("./app.css")


import React from 'react'
import ReactDOM from 'react-dom'

import {Router,Route,hashHistory,IndexRedirect} from 'react-router'

import {Provider} from 'react-redux'

import store from './_redux/store'

import RootComponent from './components/RootComponent'
import MainComponent from './components/MainComponent'
import NewsComponent from './components/NewsComponent'



ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={RootComponent}>
				<IndexRedirect to="/main"/>
				<Route path='main' component={MainComponent}></Route>
				<Route path='news' component={NewsComponent}></Route>
			</Route>
		</Router>
	</Provider>
	,document.getElementById("root"))



//1.引入Provider 对路由进行包裹 并传入store

//2.在任何想要使用数据（显示和更改）的组件外部套一个UI组件

//3.通过connect来将UI组件进行封装

//4.传入mapStateToProps  mapDispatchToProps 方法，使UI组件的属性上挂载有数据和更改数据的方法

//5.UI组件再将数据和方法传递给容器组件，容器组件就可以开心的使用和更改了   ，并且不需要写subscribe之类的东西，只要数据更改，组件就会获取最新的数据

//注意，更改数据的时候，要注意引用关系这个坑


