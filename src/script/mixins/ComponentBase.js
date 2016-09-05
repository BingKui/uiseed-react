
import PropClassMixin from './PropClassMixin';

let ComponentBase = {
	/**
     * 合并其它工具类
     * @instance
     * @see {@link module:mixins/PropClassMixin}
     */
    mixins:[PropClassMixin],
    componentWillMount:function() {
//      this.bindEvent();
    },
    /**
     * 所有组件继承这个方法，可以通过此方法控制组件库的性能
     * @instance
     * @param nextProps
     * @param nextState
     * @return {boolean}
     */
    shouldComponentUpdate:function(nextProps, nextState) {
        // 由于此处对数据进行了深度对比，所以要注意数据的引用情况，
        // 若是指针型的数值改变，可能不会自动触发render，需要使用forceUpdate方法
        // 例如sort，splice等带有副作用的函数
        //if(this.props.cname != 'input'
        //    && equal(nextProps, this.props)
        //    && equal(nextState, this.state)
        //) {
        //    return false;
        //}
        return true;
    }
};

module.exports = ComponentBase;