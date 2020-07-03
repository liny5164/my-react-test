
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import List from './components/list'
import axios from 'axios'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
class main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
            inputValue: 'kl',
            list: [
                '1',
                '2'
            ]
        }
    }

    render () {
        return (
            <Fragment>
                <div>
                    <CSSTransition
                        in={this.state.isShow}   //用于判断是否出现的状态
                        timeout={2000}           //动画持续时间
                        classNames="boss-text"   //className值，防止重复
                        unmountOnExit
                    >
                        <button className='add'>show</button>
                    </CSSTransition>

                    <div><button onClick={this.toToggole.bind(this)}>isShow</button></div>
                    <label htmlFor="js">add</label>
                    <input
                        id='js'
                        type="text"
                        ref={(input) => { this.input = input }}
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button className='add' onClick={this.add.bind(this)}> add </button>
                </div>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    // <li key={index} onClick={this.del.bind(this, index)}>{item}</li>
                                    <CSSTransition
                                        in={this.state.isShow}   //用于判断是否出现的状态
                                        timeout={2000}           //动画持续时间
                                        classNames="boss-text"   //className值，防止重复
                                        unmountOnExit
                                    >
                                        <List key={index} content={item} index={index} del={this.del.bind(this)}></List>
                                    </CSSTransition>

                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
            </Fragment>
        );
    }
    inputChange (e) {
        console.log(e);
        console.log(this.input.value);
        let value = e.target.value
        this.setState({
            inputValue: value
        })
    }
    add () {
        this.setState({
            list: [
                ...this.state.list,
                this.state.inputValue
            ]
        })
    }
    del (index) {
        console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    toToggole () {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    async componentDidMount () {
        axios.get('https://easy-mock.bookset.io/mock/5d90248cc9279644d98ee016/getList/getUserInfo').then(e => {
            console.log(e);
        })
    }
}

List.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default main;