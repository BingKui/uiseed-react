/**
 * 属性关联样式基础方法
 * @module mixins/PropClassMixin
 */

import Config from './Config';

module.exports = {
    /**
     * 此方法根据当前属性自动设置className，目前仅包括radius（圆角），disable（禁用状态）
     * @instance
     * @return {string}
     */
    getPropClass:function() {
        var classes = [];
        classes.push(this.getStyleClass());
        if(this.props.radius) {
            classes.push(Config.classPrefix +'radius');
        }
        if(this.props.disable) {
            classes.push('disable');
        }
        return classes.join(' ');
    },
    /**
     * 根据当前组件cname获取默认样式名
     * @instance
     * @return {string}
     */
    getStyleClass:function() {
    	if(this.props.theme){
	        return Config.classPrefix + this.props.theme;
    	}
    	return '';
    }, 
};