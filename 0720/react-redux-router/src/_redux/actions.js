

import store from './store'

let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  next(action);
}
export default {
	
	add:function(){
		
		let action = {
			type:"ADD_NUMBER",	
		}
		store.dispatch(action)
	}
	
}
