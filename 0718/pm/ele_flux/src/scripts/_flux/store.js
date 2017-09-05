
//store是用来管理状态的，状态就是数据，用store来管理的状态可以在任意一个组件里得到，也可以在任意一个组件里进行更改。更改之后，所有使用该状态的组件都会进行更新，数据共享

var EventEmitter = require("events").EventEmitter

var assign = require("object-assign")

const store =assign({},EventEmitter.prototype,{
	position:{
		latitude:null,
		longitude:null,
		address:''
	},
	getPosition:function(){
		return this.position
	},
	changePosition:function(position){
		this.position=position;
		this.emit("position-change")
	},
	addPositionListner:function(callback){
		this.on("position-change",callback)
	}
	
})


export default store