import React, { Component } from 'react'

export default class RCComponent extends Component {
  // 생성자: state, 변수,함수 값들을 초기화할때 사용
  // 화면이 렌더링 되기 전 실행
  constructor() {
    // state 초기화
    super() // 컴포넌트 클래스를 한번 실행하겠다
    this.state = { num: 0 }

    // 실행할 함수 연결
    this.handleIncrement = this.handleIncrement.bind(this)
    console.log('1. constructor - 컴포넌트 생성')
  }

  handleIncrement() {
    this.setState({
      num: this.state.num + 1,
    })
  }

  // Mount
  componentDidMount() {
    console.log('3. 화면첫 렌더링!')
  }

  // Update
  componentDidUpdate() {
    console.log('화면 업데이트!')
  }

  render() {
    console.log('2. render- 화면이 렌더링 되는중')
    return (
      <div>
        RCComponent: {this.state.num}
        <button onClick={this.handleIncrement}>증가</button>
      </div>
    )
  }
}
