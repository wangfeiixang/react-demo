
import NavTabComponent from './NavTabComponent'

class NavComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		this.state={
			tabs:[
				{text:'首页',icon:'home',isActive:true},
				{text:'分类',icon:'menu',isActive:false},
				{text:'我的',icon:'browser',isActive:false}
			]
		}
		
	}
	
	changeActive(icon){
		this.state.tabs.forEach((tab,i)=>{
			if(tab.icon==icon){
				tab.isActive=true;
			}else{
				tab.isActive=false;
			}
		})
		this.setState({
			tabs:this.state.tabs
		})
	}
	
	putNavTabs(){
		var arr=[];
		this.state.tabs.forEach((tab,i)=>{
			arr.push(<NavTabComponent changeActive={this.changeActive.bind(this)} info={tab} />)
		})
		return arr
	}
	
	render(){
		return (    
            <nav className="bar bar-tab">
                {this.putNavTabs()}
            </nav>

		)
			
	}
	
}

export default NavComponent