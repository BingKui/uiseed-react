import React from 'react';
import ReactDOM from 'react-dom';
import Tip from './src/script/ToastTip';
let btnHandleClick = function(){
    console.log("这个是传入的函数！");
}
var msg = "这个是提示信息";

ReactDOM.render(<Tip type="success">{msg}</Tip>, document.getElementById('toastTip'));