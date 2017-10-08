const CleanWebpackPlugin=require('clean-webpack-plugin');//清除打包文件内容插件
const path=require('path');
const webpack=require('webpack');
//配置常量
//源代码的根目录（本地物理文件路径）
const SRC_PATH=path.resolve('./src');
//打包后的资源根目录（本地物理文件路径）
const ASSETS_BUILD_PATH=path.resolve('./build');
//资源根目录（可以是cdn上的绝对路径或相对路径）
const ASSETS_PUBLIC_PATH='/assets/';

module.exports={
	context:SRC_PATH,//设置源代码根目录
	resolve:{
		extensions:['.js','.jsx']//同时支持js和jsx
	},
	entry:{
		//注意entry的路径都是相对于context的路径
		vendor:["less","babel-preset-es2015","react","react-dom"],
		a:['../src'],
		// b:['./entry-b'],
		// c:['./entry-c']
	},
	output:{
		path:ASSETS_BUILD_PATH,
		publicPath:ASSETS_PUBLIC_PATH,
		filename:'./[name].js'
	},
	module:{
		rules:[
			// {
			// 	enforce:'pre',//ESLint优先级高于其他JS相关的loader
			// 	test:/\.jsx?$/,
			// 	exclude:/node_modules/,
			// 	loader:'eslint-loader'
			// },
			{
				test:/\.css$/,
				exclude:/node_modules/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.jsx$/,
				loader:'jsx-loader',
				exclude:/node_modules/
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					query:{
						presets: ['react']
					}	
				}
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:8192,
							name:'images/[name].[ext]'
						}
					}
				]
			},
			{
				test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:8192,
							mimetype:'application/font-woff',
							name:'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use:[
					{
						loader:'file-loader',
						options:{
							limit:8192,
							mimetype:'application/font-woff',
							name:'fonts/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins:[
		//每次打包前，先清空原来目录中的内容
		new CleanWebpackPlugin([ASSETS_BUILD_PATH],{
			verbose:true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names:'vendor',
			minChunks:Infinity
		})
	]
};