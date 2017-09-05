
import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../_redux/actions'

class MainComponent extends React.Component {
	
	render(){
		const {num,add} = this.props
		return (
			
			<div>
				MainComponent--({num})<br/>
				<button onClick={actions.add} className="btn btn-success">+</button>
			</div>
			
		)
		
	}
	
}





class MainComponentUI extends React.Component {	
	render(){	
		
		const {num,add} = this.props
		return (			
			<div>
				<MainComponent add={add} num={num}/>
			</div>			
		)		
	}	
}

//connect可将ui组件包装一下，让它的属性上挂载上store的数据和action的方法
//ui组件再将数据和方法传给容器组件 

//connect的第一个参数： 可能接受到真正的state的数据，然后返回一个数据，这个数据才是会放到组件属性上的数据
//mapStateToProps 下面的ui组件得到的num将会是store里的store+1
//const mapStateToProps = state=>{
//	return {
//		num:++state.num
//	}
//}

const mapStateToProps = state=>state
//connect的第二个参数： 可以接受到store的dispatch方法，返回一个对象，这个对象上的方法将会被放入到ui组件的props上，并且这些方法
//可以后直接调用store的dispatch方法，不需要actioncreator
//const mapDispatchToProps=(dispatch)=>{
//	add:()=>{
//		dispatch({
//			type:'ADD_NUMBER'
//		})
//	}
//}



//const mapDispatchToProps=(dispatch)=>({...bindActionCreators(actions,dispatch)})
const mapDispatchToProps=(dispatch)=>({
	add:()=>{
		dispatch({
			type:'ADD_NUMBER'
		})
	}
})


export default connect(mapStateToProps,mapDispatchToProps)(MainComponentUI)


//优点：

//组件不需要调用store.getState方法来获取数据了，甚至数据还可以处理处理
//不需要调用actions的方法，自己去定义调用的规则
//数据更新之后会自动更新，不需要+subscribe..