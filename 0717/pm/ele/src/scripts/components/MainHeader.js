
class MainHeader extends React.Component {
	constructor(props,context){
		super(props,context)
		
		this.state={
			temperature:'',
			hot_words:null,
			headerSwiper:null
		}
	}
	
	render(){
		const {temperature} = this.state
		const {position} = this.props
		return (
			<header>
				<p className="info">
					<a>{position.address||'获取定位中...'}</a>
					<span>{temperature}</span>
				</p>
				<input placeholder="搜索商家、商品" onFocus={this.toSearch} className="search-inp" type="text" />			
				<div className="swiper-container hot-search">
					<div className="swiper-wrapper">
					    	{this.putHotSearch()}	
					</div>
				</div>

			</header>
		)
	}
	
	componentWillReceiveProps(props){
		this.getWeather(props)
		this.getHotSearch(props)
	}
	
	toSearch(){
		window.location.hash="search"
	}
	
	putHotSearch(){
		var arr=[];
		
		if(this.state.hot_words){
			this.state.hot_words.forEach((word,i)=>{
				arr.push(<div className="swiper-slide">{word.word}</div>)
			})
		}
		
		return arr;
	}
	
	getHotSearch(props){
		var that=this
		$.ajax({
			url:'https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude='+props.position.latitude+'&longitude='+props.position.longitude,
			success:function(result){
				console.log(result)
				that.setState({
					hot_words:result
				})
			}
		})
	}
	
	getWeather(props){
		var that=this;
		$.ajax({
			url:'https://mainsite-restapi.ele.me/bgs/weather/current?latitude='+props.position.latitude+'&longitude='+props.position.longitude,
			success:function(result){
				that.setState({
					temperature:result.temperature
				})
			}
		})
	}
	
	
	componentDidMount(){
		  this.state.headerSwiper = new Swiper('.hot-search',{
			  freeMode : true,
			  slidesPerView : 'auto',
			  freeModeSticky : true 
		  });
	}
	
	componentDidUpdate(){
		if(this.state.hot_words){
			this.state.headerSwiper.update()
		}
		  
	}
}

export default MainHeader
