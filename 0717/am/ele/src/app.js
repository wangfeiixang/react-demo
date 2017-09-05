
require("./styles/app.scss")


///////////////



import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from './scripts/components/RootComponent'
import MainComponent from './scripts/components/MainComponent'
import FindComponent from './scripts/components/FindComponent'
import OrderComponent from './scripts/components/OrderComponent'
import MineComponent from './scripts/components/MineComponent'
//<IndexRedirect to="/main"/>
ReactDOM.render(
	
	<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
			<IndexRoute component={MainComponent} />
			<Route path="main" component={MainComponent}></Route>
			<Route path="find" component={FindComponent}></Route>
			<Route path="order" component={OrderComponent}></Route>
			<Route path="mine" component={MineComponent}></Route>
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