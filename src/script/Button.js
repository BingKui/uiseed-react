/**
 * Created by 康兵奎 on 2016/9/5.
 */
import React from "react";
import ComponentBase from './mixins/ComponentBase';
import Config from './mixins/Config';
import className from './util/className';
import "../style/base.css";
import "../style/Button.css";


let Button = React.createClass({
	mixins: [ComponentBase],
    propTypes: {
        size: React.PropTypes.oneOf(['small', 'big', 'larger']),//small,big,larger
        theme: React.PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
        disable: React.PropTypes.bool,
        radius: React.PropTypes.bool,
        block: React.PropTypes.bool,
        handleClick: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            theme: 'default',  //primary,success,info,warning,danger
            handleClick: function () {
            }
        };
    },
    _click(){
        if (this.props.handleClick) {
            this.props.handleClick();
        }
    },
    returnClass(){
        let _class = [];
        if (this.props.size) {
        	_class.push(Config.btn+"-" + this.props.size);
        } else {
        	_class.push(Config.btn);
        }
        const _className = className(_class, this.getPropClass());
        return _className;
    },
    render(){
        return <button className={this.returnClass()} onClick={this.props.disable ? null : this._click}>{this.props.children}</button>;
    }
});
module.exports = Button;