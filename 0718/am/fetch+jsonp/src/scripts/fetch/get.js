import 'whatwg-fetch'

import 'es6-promise'

const Get=(url,params)=>{
	
	//创建一个fetch请求
	
	
	
	var _url = url+'?'+objToParams(params)
	let result = fetch(_url,{
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*'
		}
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


export default Get


