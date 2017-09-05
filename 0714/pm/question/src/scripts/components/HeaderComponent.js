
import React from 'react'

class HeaderComponent extends React.Component { 

	render(){
		return (
			<header className="container-fluid">
			
				<div className="main">
					<h3 className="text-center">React - 问答</h3>
					<p className="clearfix"><button className="btn btn-primary pull-right" onClick={this.props.toggleForm}>提问</button></p>
				</div>
				
			</header>
		)
	}

}

export default HeaderComponent