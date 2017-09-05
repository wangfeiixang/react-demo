

class NavTabComponent extends React.Component {
	
	getClassName(){
		return this.props.info.isActive?"tab-item external active":"tab-item external"
	}
	
	changeActive(icon){
		this.props.changeActive(icon)
	}
	
	render(){
		const {icon,text}=this.props.info
		return (              
            <a onClick={this.changeActive.bind(this,icon)} className={this.getClassName()} href="#">
                <span className={"icon icon-"+icon}></span>
                <span className="tab-label">{text}</span>
            </a>
		)
			
	}
	
}

export default NavTabComponent