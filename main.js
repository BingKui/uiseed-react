/**
 * Created by kang on 16-9-2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import ReactUI from "./src/ReactUI";
var msg = "这个是提示信息";
let Tip = ReactDOM.render(<ReactUI.ToastTip theme="success">{msg}</ReactUI.ToastTip>, document.getElementById('root'));
let btnHandleClick = function(){
    console.log("这个是传入的函数！");
    Tip.open(true);
}
var btnList = <div>
	<ReactUI.Button radius handleClick={btnHandleClick}>按钮</ReactUI.Button>
	<ReactUI.Button radius disable theme="primary">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="success">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="info">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="warning">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="danger">按钮</ReactUI.Button>
	<p>不同规格的按钮</p>
	<p>small</p>
	<ReactUI.Button radius theme="danger" size="small">按钮</ReactUI.Button>
	<p>big</p>
	<ReactUI.Button radius theme="danger" size="big">按钮</ReactUI.Button>
	<p>larger</p>
	<ReactUI.Button radius theme="danger" size="larger">按钮</ReactUI.Button>
	<p>list-btn</p>
	<ReactUI.Button radius theme="success" size="small">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="success">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="success" size="big">按钮</ReactUI.Button>
	<ReactUI.Button radius theme="success" size="larger">按钮</ReactUI.Button>
</div>;

ReactDOM.render(<ReactUI.Button radius theme="info" handleClick={btnHandleClick}>按钮</ReactUI.Button>,document.getElementById('btn'));