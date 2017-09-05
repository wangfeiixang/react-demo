
import FooterComponent from './FooterComponent'
import MainHeader from './MainHeader'

class MainComponent extends React.Component {
	constructor(props,context){
		super(props,context)
		
		this.state={
			position:{
				latitude:null,
				longitude:null,
				address:''
			}
		}
	}
	
	
	
	render(){
		return (
			<div className="root-box main-box">
				<section>
					<MainHeader position={this.state.position}/>
				</section>
				<FooterComponent active={this.props.route.path}/>
			</div>
		)
	}
	
	componentDidMount(){
		var that=this
		   var map, geolocation;
	    //加载地图，调用浏览器定位服务
	    map = new AMap.Map('container', {
	        resizeEnable: true
	    });
	    var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });
	    map.plugin('AMap.Geolocation', function() {
	        geolocation = new AMap.Geolocation({
	            enableHighAccuracy: true,//是否使用高精度定位，默认:true
	            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
	            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	            buttonPosition:'RB'
	        });
	        geolocation.getCurrentPosition();
	        AMap.event.addListener(geolocation, 'complete',(data)=>{
	        	
		     	console.log(data.position.getLng(), data.position.getLat());
		     	geocoder.getAddress([data.position.getLng(),data.position.getLat()], function(status, result) {
		            if (status === 'complete' && result.info === 'OK') {
		                geocoder_CallBack(result,data);
		            }
		        });
		    });//返回定位信息
	    });
	    function geocoder_CallBack(data,lola) {
	        var address = data.regeocode; 
	        that.setState({
	     		position:{
	     			latitude:lola.position.getLat(),
	     			longitude:lola.position.getLng(),
	     			address:''+address.addressComponent.province+address.addressComponent.district+address.aois[0].name
	     		}
	     	})
	        console.log(address)
	    }      
	}
}

export default MainComponent
