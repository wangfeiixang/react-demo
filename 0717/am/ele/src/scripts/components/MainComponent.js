
import FooterComponent from './FooterComponent'
import MainHeader from './MainHeader'

class MainComponent extends React.Component {
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		
		return (
			<div className="root-box main-box">
				<section>
					<MainHeader/>
				</section>
				<FooterComponent active={this.props.route.path}/>
			</div>
		)
	}
}

export default MainComponent
