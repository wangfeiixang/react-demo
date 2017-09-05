
import React from 'react'

import NumberComponent from './NumberComponent'

import store from '../_redux/store'

class RootComponent extends React.Component {
	
	
	
	render(){
		return (
			<div>
				
				<NumberComponent/>
				
				<p>{store.getState().num}</p>
			</div>
		)
	}
	
}


export default RootComponent