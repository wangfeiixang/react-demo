
import React from 'react'

import store from '../_redux/store'

import actions from '../_redux/actions'


class NumberComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		console.log('1.view 通过store.getState()获取到想要使用的数据')
		this.state={
			num:store.getState().num
		}
	}
	
	
	addNumber(){
		console.log('2.view产生用户操作，这个时候要调用actions的方法了')
		actions.addNumber()
	}
	
	render(){
		return (
			<div className="btn-box">
				<button onClick={actions.reduceNumber.bind(actions)} className="btn btn-success">-</button>
				<button className="btn btn-default">{this.state.num}</button>
				<button onClick={this.addNumber} className="btn btn-success">+</button>
			</div>
		)
	}
	
	
	componentDidMount(){
		var that=this;
		store.subscribe(function(){
			console.log('7.reducer返回新数据之后，view会重新获取数据')
			that.setState({
				num:store.getState().num
			})
		})
	}
	
}


export default NumberComponent