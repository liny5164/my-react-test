import React, { Component } from 'react'

class list extends Component {

    render () {
        console.log('child-render')
        return (
            <div onClick={this.handleClick.bind(this)} >{this.props.content}</div>
        );
    }
    handleClick () {
        console.log(this.props.index, 'props.index');
        this.props.del(this.props.index)
    }
    //子组件state变化时触发
    // componentWillReceiveProps () {
    //     console.log('child - componentWillReceiveProps')
    // }
    //性能优化,组件更新之前
    shouldComponentUpdate (nextProps, nextState) {
        // nextProps:变化后的属性;
        //nextState:变化后的状态;
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
}

export default list;