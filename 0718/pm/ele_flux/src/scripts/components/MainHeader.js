
import store from '../_flux/store'

class MainHeader extends React.Component {
	constructor(props,context){
		super(props,context)
		
		this.state={
			temperature:'',
			hot_words:null,
			headerSwiper:null,
			position:store.getPosition()
		}
	}
	
	render(){
		const {temperature,position} = this.state
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
	
	getHotSearch(){
		var that=this
		$.ajax({
			url:'http://localhost:9000/shopping/v3/hot_search_words?latitude='+this.state.position.latitude+'&longitude='+this.state.position.longitude,
			success:function(result){
				console.log(result)
				that.setState({
					hot_words:result
				})
			}
		})
	}
	
	getWeather(){
		var that=this;
		$.ajax({
			url:'http://localhost:9000/bgs/weather/current?latitude='+this.state.position.latitude+'&longitude='+this.state.position.longitude,
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
		  
		  	//当从其它路由切换回来的时候，判断一下有没有定位信息，有的话直接获取数据
		 	if(this.state.position.address){
		 		console.log(123)
		 		this.getWeather()
		    	this.getHotSearch()
		 	}
		  			  
		  var that=this;
		  store.addPositionListner(function(){
		  	that.setState({
		  		position:store.getPosition()
		  	})
		  	that.getWeather()
		    that.getHotSearch()
		  })
	}
	
	componentDidUpdate(){
		if(this.state.hot_words){
			this.state.headerSwiper.update()
		}
		  
	}
}

export default MainHeader
