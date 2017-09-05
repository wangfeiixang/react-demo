

import NavComponent from './NavComponent'
import ContentComponent from './ContentComponent'

class RootComponent extends React.Component {
	
	render(){
		return (
			<div>
				<header className="bar bar-nav">
	                <h1 className="title">辣条</h1>
	            </header>
	
	           
	            <NavComponent/>
	
	           
	            <ContentComponent/>
			</div>
		)
			
	}
	
}

export default RootComponent