/**
 * Created by 康兵奎 on 2016/9/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../script/Button';

let btnHandleClick = function(){
    console.log("这个是传入的函数！");
}
var msg = "这个按钮";
ReactDOM.render(<Button>{msg}</Button>, document.getElementById('btn'));