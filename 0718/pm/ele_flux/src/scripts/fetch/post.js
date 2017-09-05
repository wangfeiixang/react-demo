import 'whatwg-fetch'

import 'es6-promise'

const Post=(url,params)=>{
	
	//创建一个fetch请求
	
	let result = fetch(url,{
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'content-type':"application/x-www-form-urlencoded"
		},
		method:'POST',
		body:objToParams(params)
	})
	
	return result
}


function objToParams(obj){
	var result = '';
	var item;
	for (item in obj) {
		result+="&"+item+'='+encodeURIComponent(obj[item])
	}
	
	if(result){
		result=result.slice(1)
	}
	
	return result
}


export default Post



