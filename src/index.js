import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import Indexcss from "./css/index.less";

class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			name:this.props.name
		};
	};
	but(){
		this.setState({name:'你好，世界！'});
	};
	render(){
		return (
			<div>
				<h1 className="h">大哥大的就是h1</h1>
				<h2>这里是h2呢？</h2>
				<h3>写个h3瞧瞧了！</h3>
				<h4>当我h4是摆设吗？</h4>
				<h5>有了h4，h5还会远吗？</h5>
				<h6>最小的h6，在最后的位置上了。123456</h6>
				<div>看看你是谁呢？</div>
				<p>{this.state.name}</p>
				<p><img src={require('./images/dongda.jpg')}/></p>
				<button onClick={this.but.bind(this)}>按钮</button>
				<App />
				<p><img src={require('../assets/images/nk.jpg')}/></p>
			</div>
		)
	};
};

ReactDOM.render(
	<Index name="index"/>,
	document.querySelector('#app')
);