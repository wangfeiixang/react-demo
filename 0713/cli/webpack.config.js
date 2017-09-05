
var webpack = require('webpack')

var HtmlWebpackPlugin = require("html-webpack-plugin")

var ExtractTextPlugin = require("extract-text-webpack-plugin")

//进行webpack打包的配置
module.exports = {
	//入口文件：
	entry:"./src/app.js",
	//输出位置：
	output:{
		path:__dirname+'/build',//注意，要用绝对路径
		filename:'app.js'
	},
	devServer:{//配置热更新服务器
		contentBase:'./build',
		host:'localhost',
		port:9000,
		historyApiFallback:false
	},
	plugins:[
		//让index.html也能打包过去，并且能主动的引上对应的文件
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
//				loader:'style-loader!css-loader'
//			},
//			{
//				test:/\.scss$/,
//				loader:'style-loader!css-loader!sass-loader'
//			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			},
			{
				test:/\.js$/,
				loader:"jsx-loader"
			}
		]
	}
	
	
}


