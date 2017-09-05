
import React from 'react'

import QuestionComponent from './QuestionComponent'

class QuestionBoxComponent extends React.Component { 
	
	putQuetion(){
		var arr=[]
		
		if(this.props.questions){
			this.props.questions.forEach((question,i)=>{
				arr.push(<QuestionComponent changeHot={this.props.changeHot} key={i} question={question}/>)
			})
		}
		
		return arr
	}
	
	render(){
		return (
								
			<div className="question-box">
				{this.putQuetion()}
			</div>

		)
	}

}

export default QuestionBoxComponent