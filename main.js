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
	<ReactUI.Button radius disable style="primary">按钮</ReactUI.Button>
	<ReactUI.Button radius style="success">按钮</ReactUI.Button>
	<ReactUI.Button radius style="info">按钮</ReactUI.Button>
	<ReactUI.Button radius style="warning">按钮</ReactUI.Button>
	<ReactUI.Button radius style="danger">按钮</ReactUI.Button>
	<p>不同规格的按钮</p>
	<p>small</p>
	<ReactUI.Button radius style="danger" size="small">按钮</ReactUI.Button>
	<p>big</p>
	<ReactUI.Button radius style="danger" size="big">按钮</ReactUI.Button>
	<p>larger</p>
	<ReactUI.Button radius style="danger" size="larger">按钮</ReactUI.Button>
	<p>list-btn</p>
	<ReactUI.Button radius style="success" size="small">按钮</ReactUI.Button>
	<ReactUI.Button radius style="success">按钮</ReactUI.Button>
	<ReactUI.Button radius style="success" size="big">按钮</ReactUI.Button>
	<ReactUI.Button radius style="success" size="larger">按钮</ReactUI.Button>
</div>;

//ReactDOM.render(<ToastTip type="success">{msg}</ToastTip>, document.getElementById('root'));
ReactDOM.render(btnList,document.getElementById('btn'));