
import React from 'react'

import store from '../_redux/store'
import actions from '../_redux/actions'

class CSon extends React.Component {
	
	constructor(props,context){
		super(props,context)
		this.state={
			word:store.getState().word
		}
	}
	handleChange(){
		actions.changeWord('C-word')
	}
	
	put
	
	render(){
		return (
			<div className="box">
				<button onClick={this.handleChange} className="btn btn-success">C</button>
				<p>{this.state.word}</p>
			</div>
		)
	}
	componentDidMount(){
		
		store.subscribe(function(){
			this.setState({
				word:store.getState().word
			})
		}.bind(this))
	}
}


export default CSon