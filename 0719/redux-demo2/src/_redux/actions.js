

import store from './store'

export default {
	
	changeWord:function(word){
		
		let action = {
			type:"CHANGE_WORD",
			word:word
		}
		
		store.dispatch(action)
	}
	
}
