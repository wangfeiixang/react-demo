

var NavComponent = React.createClass({
	render:function(){
		return (
			<nav className="bar bar-tab">
	                <a className="tab-item external active" href="#">
	                    <span className="icon icon-home"></span>
	                    <span className="tab-label">首页</span>
	                </a>
	                <a className="tab-item external" href="#">
	                    <span className="icon icon-star"></span>
	                    <span className="tab-label">收藏</span>
	                </a>
	                <a className="tab-item external" href="#">
	                    <span className="icon icon-settings"></span>
	                    <span className="tab-label">设置</span>
	                </a>
	            </nav>
		)
	}
})

module.exports=NavComponent