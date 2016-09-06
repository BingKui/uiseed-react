/**
 * Created by kang on 16-9-2.
 */
import React from 'react';
import ComponentBase from './mixins/ComponentBase';
import Config from './mixins/Config';
import className from './util/className';
import '../style/base.css';
import '../style/ToastTip.css';
import $ from "jquery";

let ToastTip = React.createClass({
	mixins: [ComponentBase],
    propTypes:{
        theme:React.PropTypes.string,
        timeout:React.PropTypes.number
    },
    getInitialState(){
        return {
            visible: false,
         	show: true
        };
    },
    getDefaultProps(){
        return {
            theme:'default',//default,primary,success,info,warning,danger
            timeout:2500
        };
    },
    _timeOut(){
        setTimeout(() => {
            this.setState({
                visible:false
            });
        },this.props.timeout+500);
        setTimeout(() => {
            this.setState({
                show:false
            });
        },this.props.timeout);
    },
    componentDidUpdate(){
	    this._getWidth();
    },
    _getWidth(){
        let _toast = this.refs._toast;
        console.log();
        let _left = - ($(_toast).width()+20) / 2;
        $(_toast).css({
            marginLeft: _left
        });
    },
    open(){
    	this.setState({
            visible:true,
            show: true
        });
        this._timeOut();
    },
    _returnClassName(){
    	let _class = className(Config.toastTip,this.getPropClass(),(this.state.show ? "show":"unshow"));
        return _class;
    },
    render(){
        return this.state.visible ? (<div ref="_toast" className={this._returnClassName()}>{this.props.children}</div>) : null;

    }
});
module.exports = ToastTip;