

//var React = require('react')

var HeaderComponent = require("./HeaderComponent")
var NavComponent = require("./NavComponent")
var ContentComponent = require("./ContentComponent")

var RootComponent = React.createClass({
	render:function(){
		return (
			<div>				
				<HeaderComponent/>	        
	            <NavComponent/>	
				<ContentComponent/>	            
			</div>
		)
	}
})


module.exports = RootComponent