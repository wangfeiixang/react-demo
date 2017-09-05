
import React from 'react'

import HeaderComponent from './HeaderComponent'
import ContentComponent from './ContentComponent'

class RootComponent extends React.Component { 
	constructor(props,context){
		super(props,context)
		this.state={
			isFormShow:false
		}
	}
	
	toggleForm(){
		this.setState({
			isFormShow:!this.state.isFormShow
		})
	}

	render(){
		return (
			<div>
				<HeaderComponent toggleForm={this.toggleForm.bind(this)}/>
				<ContentComponent  toggleForm={this.toggleForm.bind(this)} isFormShow={this.state.isFormShow}/>
			</div>
		)
	}

}

export default RootComponent