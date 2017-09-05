
import React from 'react'

class FormComponent extends React.Component { 

	constructor(props,context){
		super(props,context)
		this.state={
			title:'',
			description:''
		}
	}

	changeValue(type,e){
		var obj = {};
		obj[type]=e.target.value;
		this.setState(obj)
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.addNewQuestion(this.state.title,this.state.description)
		e.target.reset()
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className={this.props.isFormShow?'':'hidden'} action="">
				<div className="form-group">
					<label >标题</label>
					<input onChange={this.changeValue.bind(this,'title')} type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label >内容</label>
					<textarea onChange={this.changeValue.bind(this,'description')} className="form-control"></textarea>
				</div>
				<div className="form-group btn-box clearfix">
					<button type="button" onClick={this.props.toggleForm} className="btn btn-default pull-right">取消</button>
					<button type="submit"  className="btn btn-primary pull-right">提交</button>
				</div>
			</form>

		)
	}

}

export default FormComponent