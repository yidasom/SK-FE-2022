import { Component } from 'react';
import { getRandomMinMax } from '../utils';

const completedStyle = {
  animationName: 'none',
};

class RandomCountUp extends Component {
  // 라이프 사이클 메서드 [1]
  // 컴포넌트가 생성될 때 1회 실행
  constructor(props) {
    super(props);

    // 컴포넌트 상태 선언
    this.state = {
      count: 0,
      step: 1,
      target: getRandomMinMax(40, 80),
    };
  }

  // 라이프 사이클 메서드 [2]
  // 컴포넌트가 생성될 때, 업데이트 할 때 모두 실행
  // props에 의해 파생된(derived) 상태 값 믹스인(합성)
  static getDerivedStateFromProps(props, state) {
    const { count, step } = props;
    const { target } = state;
    const isComplete = count >= target;

    return {
      count,
      step,
      isComplete,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="random-count-up">
        <output style={this.state.isComplete ? completedStyle : null}>0</output>
      </div>
    );
  }
}

export default RandomCountUp;
