const webpack=require('webpack');
const config=require('./webpack.base.config');

//webpack-dev-server相关配置项
//有关webpack的API本地处理，参考https://webpack.github.io/docs/webpack-dev-server.html#proxy
config.devServer={
	contentBase:'./',
	hot:true,
	// publicPath:'/assets/',
	inline:true
};
//热加载style配置
config.module.rules.push({
	test:/\.less$/,
	use:['style-loader','css-loader','less-loader'],
	exclude:/node_modules/
});
//真实场景中react，jquery等优先走全站CDN，所以要放在externals中
// config.externals={
// 	react:'React',
// 	'react-dom':'ReactDOM',
// 	jquery:'$',
// 	jquery:'jquery'
// };
//添加sourcemao支持
config.plugins.push(
	new webpack.SourceMapDevToolPlugin({
		filename:'[file].map',
		exclude:['vendor.js']
	})
);

//Hot Module Replacement
Object.keys(config.entry).forEach((key)=>{
	//这里有个私有的约定，如果entry是一个数组证明它需要hot module replacement
	if(Array.isArray(config.entry[key])){
		config.entry[key].unshift(
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'webpack/hot/only-dev-server'
		);
	}
});
config.plugins.push(
	new webpack.HotModuleReplacementPlugin()
);

module.exports=config;
