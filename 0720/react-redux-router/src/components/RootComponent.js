
import React from 'react'
import {Link} from 'react-router'
class RootComponent extends React.Component {
	
	render(){
		console.log(this)
		return (
			
			<div>
				{this.props.children}
				<footer>
					<Link className="btn btn-success" to="main">首页</Link>
					<Link className="btn btn-success" to="news">新闻</Link>
				</footer>
			</div>
			
		)
		
	}
	
}


export default RootComponent

//ui组件  容器组件

//木偶组件 智能组件