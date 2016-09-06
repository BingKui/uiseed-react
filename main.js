/**
 * Created by kang on 16-9-2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import ReactUI from "./src/ReactUI";

let btnHandleClick = function(){
    console.log("这个是传入的函数！");
}
var msg = "这个是提示信息";
var btnList = <div>
	<ReactUI.Button radius handleClick={btnHandleClick}>按钮</ReactUI.Button>
	<ReactUI.Button radius disable them="primary">按钮</ReactUI.Button>
	<ReactUI.Button radius them="success">按钮</ReactUI.Button>
	<ReactUI.Button radius them="info">按钮</ReactUI.Button>
	<ReactUI.Button radius them="warning">按钮</ReactUI.Button>
	<ReactUI.Button radius them="danger">按钮</ReactUI.Button>
	<p>不同规格的按钮</p>
	<p>small</p>
	<ReactUI.Button radius them="danger" size="small">按钮</ReactUI.Button>
	<p>big</p>
	<ReactUI.Button radius them="danger" size="big">按钮</ReactUI.Button>
	<p>larger</p>
	<ReactUI.Button radius them="danger" size="larger">按钮</ReactUI.Button>
	<p>list-btn</p>
	<ReactUI.Button radius them="success" size="small">按钮</ReactUI.Button>
	<ReactUI.Button radius them="success">按钮</ReactUI.Button>
	<ReactUI.Button radius them="success" size="big">按钮</ReactUI.Button>
	<ReactUI.Button radius them="success" size="larger">按钮</ReactUI.Button>
</div>;

ReactDOM.render(<ReactUI.ToastTip them="success">{msg}</ReactUI.ToastTip>, document.getElementById('root'));
//ReactDOM.render(btnList,document.getElementById('btn'));