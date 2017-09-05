

class ClassifyComponent extends React.Component {
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		console.log(this)
		return (
			<div className="root-box">
				<header>
					<a href="#/search" style={{fontSize:'2.5rem'}}>&lt;</a>
				</header>
				{this.props.params.wd}
			</div>
		)
	}
}

export default ClassifyComponent
