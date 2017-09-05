
import {createStore} from 'redux'



const store = createStore((state={
	num:0
},action)=>{
	
	switch(action.type){
		case 'ADD_NUMBER':
			var new_state={...state}
		 	new_state.num++;
		 	return new_state;
		 case 'REDUCE_NUMBER':
			var new_state={...state}
		 	new_state.num--;
		 	return new_state
		default:
			return state;			
	}
	
})

export default store