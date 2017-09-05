

import store from '../_flux/store'

import actions from '../_flux/actions'

class TodoListComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		console.log('1.view得到了store里保存的数据')
		this.state={
			new_title:'',
			todos:store.getAll()
		}
	}
	
	finishTodo(id){
		actions.finishTodo(id)
	}
	
	putTodos(){
		var arr=[];
		if(this.state.todos){
			this.state.todos.forEach((todo,i)=>{
				arr.push(<li className="list-group-item">
						<input onChange={this.finishTodo.bind(this,todo.id)} checked={todo.isFinished} type="checkbox" />
						  {todo.title}
						<span onClick={actions.removeTodo.bind(actions,todo.id)} className="glyphicon glyphicon-remove pull-right"></span>
					</li>)
			})
		}
		return arr;
	}
	
	changeTitle(e){
		this.setState({
			new_title:e.target.value
		})
	}
	
	handleKeyUp(e){
		if(e.keyCode==13){
			console.log('2.view产生一个用户操作')
			
			console.log('3.view调用action 的方法..')
			actions.addNew(this.state.new_title)
			
		}
	}
	
	componentDidMount(){
		var that=this
		store.addChangeListener(()=>{
			console.log('10.store的事件被触发，view会重新获取更改完成后的数据')
			that.setState({
				todos:store.getAll()
			})
		})
	}
	
	render(){
		return (
			<div className="main">
				<input type="text" onKeyUp={this.handleKeyUp.bind(this)} onChange={this.changeTitle.bind(this)}  className="form-control"/>
				<ul className="list-group">
					{this.putTodos()}
				</ul>
			</div>
		)
	}
}

export default TodoListComponent