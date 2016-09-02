/**
 * Created by kang on 16-9-2.
 */
import React from 'react';

let Tip = React.createClass({
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
    _returnClassName(){
        let _className = "mc-toast-";
        _className += this.props.type;
        return _className;
    },
    render(){
        //this._timeOut();
        return <div className="mc-toast">
            <div className={this._returnClassName()}>{this.props.children}</div>
        </div>;
    }
});
module.exports = Tip;