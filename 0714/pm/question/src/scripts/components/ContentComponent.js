
import React from 'react'

import FormComponent from './FormComponent'

import QuestionBoxComponent from './QuestionBoxComponent'

class ContentComponent extends React.Component { 

	constructor(props,context){
		super(props,context)
		this.state={
			questions:null,
			orderStyle:false//排序方式 true 降序
		}
		this._id=2;
	}

	addNewQuestion(title,description){
		this.state.questions.push({
			title,
			description,
			hot:0,
			id:++this._id
		})
		this.setState({
			questions:this.state.questions
		})
	}

	changeHot(id,type){
		var questions = this.state.questions;
		for(var i = 0;i<questions.length;i++){
			if(questions[i].id==id){
				
				if(type=='+'){
					questions[i].hot++;
				}else{
					questions[i].hot=questions[i].hot>=1?--questions[i].hot:questions[i].hot
				}
				
				break;
			}
		}
		
		this.setState({
			questions:questions
		})
	}

	orderQuestion(){
		var that = this;
		if(this.state.questions){
			this.state.questions.sort((a,b)=>{
				return that.state.orderStyle?(b.hot-a.hot):(a.hot-b.hot)
			})
		}		
		return this.state.questions
	}

	render(){
		return (
			<section className="container-fluid">
				<div className="main">
					<FormComponent addNewQuestion={this.addNewQuestion.bind(this)}  toggleForm={this.props.toggleForm} isFormShow={this.props.isFormShow}/>
					
					
					<QuestionBoxComponent changeHot={this.changeHot.bind(this)} questions={this.orderQuestion()}/>
					
				</div>
			</section>
		)
	}
	
	componentWillMount(){
		var that=this;
		$.ajax({
			url:'json/question.json',
			dataType:'json',
			success:function(result){
				that.setState({
					questions:result
				})
			}
		})
	}

}

export default ContentComponent



react-router

flux  redux   react-redux

微场景

5       vue


4   


