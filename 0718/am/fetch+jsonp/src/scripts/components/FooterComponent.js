

import {Link} from 'react-router'

class FooterComponent extends React.Component {
	constructor(props,context){
		super(props,context)
	}
	
	getActiveClass(type){
		var active=this.props.active==undefined?'main':this.props.active
		return active==type?'active':""
	}
	
	render(){
		return (
			<footer>
				<a href="#/main" className={this.getActiveClass('main')}>
					<span className="iconfont icon-element"></span>
					<span>外卖</span>
				</a>
				<a href="#/find" className={this.getActiveClass('find')}>
					<span className="iconfont icon-faxian"></span>
					<span>发现</span>
				</a>
				<Link to="order" className={this.getActiveClass('order')}>
					<span className="iconfont icon-dingdan3"></span>
					<span>订单</span>
				</Link>
				<Link to="mine" className={this.getActiveClass('mine')}>
					<span className="iconfont icon-wode"></span>
					<span>我的</span>
				</Link>
			</footer>
		)
	}
	
}

export default FooterComponent