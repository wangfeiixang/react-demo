
//actionCreate就是一个纯对象，上面有很多方法，供View 去调用，方法被调用之后会产生一个action
//交予dispatcher来进行处理

import dispatcher from './dispatcher'

var actions = {
	addNew:function(title){
		console.log('4.actions的方法被调用，并创建一个action')
		var action={
			title:title,
			type:'ADD_NEW'
		}
		console.log('5.actions将创建好的action交给dispatcher来处理')
		dispatcher.dispatch(action)
	},
	finishTodo:function(id){
		dispatcher.dispatch({
			type:'FINISH_TODO',
			id:id
		})
	},
	removeTodo:function(id){
		dispatcher.dispatch({
			type:'REMOVE_TODO',
			id:id
		})
	}
}


export default actions