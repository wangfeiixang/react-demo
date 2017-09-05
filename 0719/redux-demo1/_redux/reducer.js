
//reducer接受到原有数据，返回新数据
export default (state={num:1},action)=>{
	console.log('5.store.dispatch方法被触发之后，reducer函数会触发')
	switch(action.type){
		case "ADD_NUMBER":
		console.log('6.reducer根据action的类型来返回不同的新数据')
			state.num++
			return state;
		case "REDUCE_NUMBER":
			state.num--
			return state;	
		default :
			return state;
	}

	
}
