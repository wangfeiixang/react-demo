
import React from 'react'

import {connect} from 'react-redux'

class NewsComponent extends React.Component {
	
	render(){
		const {num,reduce} = this.props
		return (
			
			<div>
				NewsComponent--({num})<br/>
				<button onClick={reduce}  className="btn btn-success">-</button>
			</div>
			
		)
		
	}
	
}




class NewsComponentUI extends React.Component {	
	render(){		
		const {num,reduce} = this.props
		return (			
			<div>
				<NewsComponent num={num} reduce={reduce} />
			</div>			
		)		
	}	
}


const mapStateToProps = state=>state
const mapDispatchToProps=(dispatch)=>({
	reduce:()=>{
		dispatch({
			type:'REDUCE_NUMBER'
		})
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(NewsComponentUI)