
class MainHeader extends React.Component {
	constructor(props,context){
		super(props,context)
		
		this.state={
			temperature:0
		}
	}
	
	render(){
		const {temperature} = this.state
		return (
			<header>
				<p className="info">
					<a>北京科技职业学院</a>
					<span>{temperature}</span>
				</p>
			</header>
		)
	}
	
	componentDidMount(){
		var that=this;
		$.ajax({
			url:'https://mainsite-restapi.ele.me/bgs/weather/current?latitude=40.11854&longitude=116.25142',
			success:function(result){
				that.setState({
					temperature:result.temperature
				})
			}
		})
	}
}

export default MainHeader
