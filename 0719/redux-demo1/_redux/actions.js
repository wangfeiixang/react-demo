
import store from './store'

export default {
	addNumber:()=>{
		console.log('3.actionCreate的方法被调用，会产生一个带有标识性信息的action')
		let action={
			type:'ADD_NUMBER'
		}
		console.log('4.将这个action传给store的dispatch方法')
		store.dispatch(action)
	},
	reduceNumber:()=>{
		store.dispatch({
			type:'REDUCE_NUMBER'
		})
	}
}
