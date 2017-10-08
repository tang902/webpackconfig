const webpack=require('webpack');
const path=require('path');
const config=require('./config/webpack.base.config');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');//css分离插件

const Less = require('less');

//打包时的style配置
config.module.rules.push(
	{
		test:/\.less$/,
		use:ExtractTextWebpackPlugin.extract(
			{	
				fallback:'style-loader',
				use:['css-loader','less-loader']
			}
		),
		exclude:/node-modules/
	}
);
config.plugins.push(
	new webpack.DefinePlugin({
		//配置NODE_ENV的使用环境development=开发环境，production=生产环境
		'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'production')
	}),
	new webpack.LoaderOptionsPlugin({minimize:true}),
	new ExtractTextWebpackPlugin({
		filename:'[name].css',
		allChunks:true,
		ignoreOrder:true
	})	
);

module.exports=config
