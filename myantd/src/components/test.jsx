import React, { Component } from 'react'
import {Button} from 'antd-mobile';
import PropTypes from 'prop-types'

export default class test extends Component {
  
  static propTypes =  {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }
  
  increment = () => {
    let num = Number(this.input.value)
    this.props.increment(num)
  }

  decrement = () => {
    let num = Number(this.input.value)
    this.props.decrement(num)
  }

  // culculateAdd = () => {
  //   let tmpNum = this.state.num
  //   tmpNum += Number(this.input.value) || tmpNum
  //   this.setState({
  //     num: tmpNum
  //   })
  //   this.input.value = 0
  // }

  // culculateDecrease = () => {
  //   let tmpNum = this.state.num
  //   tmpNum -= Number(this.input.value) || tmpNum
  //   this.setState({
  //     num: tmpNum
  //   })
  //   this.input.value = 0
  // }

  render() {
    return (
      <div>
        <header>there is {this.props.count} caixukun!</header>
        <div className='btnBox leftStart'>
          <input type='number' placeholder='鸡你太美！' ref={input=>this.input=input} />
          <Button size='small' type='primary' onClick={this.increment} >添加</Button>
          <Button size='small' type='dashed' onClick={this.decrement} >减少</Button>
          <Button size='small' type='primary'>延时添加</Button>
        </div>
      </div>
    )
  }
}

