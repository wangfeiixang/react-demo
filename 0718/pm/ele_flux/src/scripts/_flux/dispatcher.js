
//dispatcher专门接受actionCreate传递过来action，然后去调用store的方法（更改数据）

import store from './store'
var Dispatcher = require('flux').Dispatcher


const dispatcher = new Dispatcher()

//会在actionCreate传入action的时候触发
dispatcher.register((action)=>{
	switch(action.type){
		case 'CHANGE_POSITION':
			store.changePosition(action.position)
			break;
		
	}
})

export default dispatcher