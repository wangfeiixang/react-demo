
import React from 'react'

class QuestionComponent extends React.Component { 

	render(){
		const {id,hot,title,description} = this.props.question
		return (

			<div className="question">
				
				<div className="left">
					<button  onClick={this.props.changeHot.bind(this,id,'+')} className="btn btn-primary"><span className="glyphicon glyphicon-chevron-up"></span></button>
					<button className="btn btn-default">{hot}</button>
					<button onClick={this.props.changeHot.bind(this,id,'-')} className="btn btn-primary"><span className="glyphicon glyphicon-chevron-down"></span></button>
				</div>
				
				<div className="right">
					
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				
			</div>


		)
	}

}

export default QuestionComponent