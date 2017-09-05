
import {createStore} from 'redux'



const store = createStore((state={
	word:'hello'
},action)=>{
	
	switch(action.type){
		case 'CHANGE_WORD':
			state.word=action.word
			return state;
			break;
		default:
			return state;			
	}
	
})

export default store