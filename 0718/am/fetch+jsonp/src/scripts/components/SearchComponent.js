

class SearchComponent extends React.Component {
	constructor(props,context){
		super(props,context)
	}
	
	render(){
		
		return (
			<div className="root-box">
				<header>
					<a href="#/main" style={{fontSize:'2.5rem'}}>&lt;</a>
				</header>
				<a href="#/classify/夹肉饼">夹肉饼</a>
				<a href="#/classify/重庆小面">重庆小面</a>
				<a href="#/classify/凉皮">凉皮</a>
			</div>
		)
	}
}

export default SearchComponent
