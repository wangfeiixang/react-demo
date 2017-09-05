
import React from 'react'


import A from './A'
import B from './B'
import C from './C'

class RootComponent extends React.Component {
	
	
	
	render(){
		return (
			<div>
				<A/>
				<hr/>
				<B/>
				<hr/>
				<C/>
			</div>
		)
	}
	
}


export default RootComponent