import React, { Component } from 'react'
import {Button} from 'antd-mobile';

export default class test extends Component {

  state = {
    num: 0
  }

  culculateAdd = () => {
    let tmpNum = this.state.num
    tmpNum += Number(this.input.value) || tmpNum
    this.setState({
      num: tmpNum
    })
    this.input.value = 0
  }

  culculateDecrease = () => {
    let tmpNum = this.state.num
    tmpNum -= Number(this.input.value) || tmpNum
    this.setState({
      num: tmpNum
    })
    this.input.value = 0
  }

  render() {
    return (
      <div>
        <header>there is {this.state.num} caixukun!</header>
        <div className='btnBox leftStart'>
          <input type='number' placeholder='鸡你太美！' ref={input=>this.input=input} />
          <Button size='small' type='primary' onClick={this.culculateAdd}>添加</Button>
          <Button size='small' type='dashed' onClick={this.culculateDecrease}>减少</Button>
          <Button size='small' type='primary'>延时添加</Button>
        </div>
      </div>
    )
  }
}

