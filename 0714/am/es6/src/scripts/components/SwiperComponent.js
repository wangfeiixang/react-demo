
class SwiperComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		
		this.state={
			imgs:null
		}
		
		this.mySwiper=null;
		
	}
	
	componentWillMount(){
		let that = this
		$.ajax({
			url:this.props.url,
			dataType:'json',
			success:(result)=>{
				that.setState({
					imgs:result
				})
			}
		})
	}
	
	putSlides(){
		let arr = [];
		
		if(this.state.imgs){
			this.state.imgs.forEach((src,i)=>{
				arr.push(<div className="swiper-slide"><img src={src}/></div>)
			})
		}
		
		return arr;
	}
	
	render(){
		return (
           <div className="swiper-container">
				<div className="swiper-wrapper">
					{this.putSlides()}
				</div>
				<div className="swiper-pagination"></div>
			</div>

		)			
	}
	
	componentDidMount(){
		this.mySwiper = new Swiper(".swiper-container",{
			pagination:'.swiper-pagination'
		})
	}
	
	componentDidUpdate(){
		this.mySwiper.update()
	}
	
	
}

SwiperComponent.defaultProps={
	url:'json/banner.json'
}

export default SwiperComponent