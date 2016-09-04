/**
 * Created by kang on 16-9-2.
 */
import React from 'react';
import '../style/tip.css';
import $ from "jquery";

let ToastTip = React.createClass({
    propTypes:{
        type:React.PropTypes.string,
        timeout:React.PropTypes.number
    },
    getInitialState(){
        return {
            visible:true
        };
    },
    getDefaultProps(){
        return {
            type:'default',//default,success,info,warning,error
            timeout:2000
        };
    },
    _timeOut(){
        setTimeout(() => {
            this.setState({
                visible:false
            });
        },this.props.timeout);
    },
    componentDidMount(){
        this._getWidth();
    },
    _getWidth(){
        let _toast = this.refs._toast;
        let _left = - ($(_toast).width()) / 2;
        $(_toast).css({
            marginLeft: _left
        });
    },
    _returnClassName(){
        let _className = "ui-toast ui-toast-";
        _className += this.props.type;
        return _className;
    },
    render(){
        //this._timeOut();

        return this.state.visible ? (<div ref="_toast" className={this._returnClassName()} style={{marginLeft:""}}>{this.props.children}</div>) : null;

    }
});
module.exports = ToastTip;