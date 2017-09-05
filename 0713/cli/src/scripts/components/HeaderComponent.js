

var HeaderComponent = React.createClass({
	render:function(){
		return (
			<header className="bar bar-nav">
                <a className="icon icon-me pull-left open-panel"></a>
                <h1 className="title">标题</h1>
            </header>
		)
	}
})

module.exports=HeaderComponent