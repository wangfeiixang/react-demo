
var webpack = require("webpack")

var HtmlWebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	//入口文件--主模块
	entry:'./src/app.js',
	//出口
	output:{
		path:__dirname+'/build',//必须写成绝对路径
//		filename:'app-'+Date.now()+'.js'
//		filename:'app_[hash].js'
		filename:'app.js'
	},
	devServer:{
		proxy:{
			'/hot_words': {
		        target: 'http://www.toutiao.com',
		        changeOrigin: true,
		        secure:false
		   },
		   '/index':{
		   		target: 'https://m.juanpi.com',
		        changeOrigin: true,
		        secure:false
		   },
		   '/shopping':{
		   		target: 'https://mainsite-restapi.ele.me',
		        changeOrigin: true,
		        secure:false
		   },
		   '/bgs':{
		   		target: 'https://mainsite-restapi.ele.me',
		        changeOrigin: true,
		        secure:false
		   }
		},
		contentBase:"./build",
		port:9000,
		host:'localhost',
		historyApiFallback:false
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html'
		}),
		new ExtractTextPlugin({
			filename:'app.css',
			allChunks:true
		}),
		new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	],
	module:{
		loaders:[
//			{
//				test:/\.css$/,
//				//css-loader:将打包好的js文件里的css代码提出来，=
//				//style-loader：将提出来的css代码整成一个style标签，放入头部
//				//注意：倒着来的
//				loader:'style-loader!css-loader'
//			},
//			{
//				test:/\.scss$/,
//				//css-loader:将打包好的js文件里的css代码提出来，=
//				//style-loader：将提出来的css代码整成一个style标签，放入头部
//				//注意：倒着来的
//				loader:'style-loader!css-loader!sass-loader'
//			},
			{//将css提出放入一个文件
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:'css-loader'
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:'css-loader!sass-loader'
				})
			},
//			{//编译jsx
//				test:/\.js$/,
//				loader:'jsx-loader'
//			},
			{//编译jsx
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}
