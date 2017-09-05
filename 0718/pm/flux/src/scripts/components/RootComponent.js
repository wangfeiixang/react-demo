
import store from '../_flux/store'
import TodoListComponent from './TodoListComponent'

class RootComponent extends React.Component {
	
	constructor(props,context){
		super(props,context)
		this.state={
			todos:store.getAll()
		}
	}
	
	render(){
		return (
			<div>
				
				<TodoListComponent/>
				
				<hr/>
				
				{JSON.stringify(this.state.todos)}
			</div>
		)
	}
	
	componentDidMount(){
		var that=this
		store.addChangeListener(()=>{
			that.setState({
				todos:store.getAll()
			})
		})
	}
}

export default RootComponent

// 在什么时候使用flux
// 当你不知道该不该使用flux的时候，就不需要使用flux
// 当你出现react解决不了的问题的时候，这个时候就需要flux