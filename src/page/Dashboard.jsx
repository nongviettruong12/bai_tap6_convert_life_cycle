import React, { Component } from 'react';
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor: Component được khởi tạo');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps: Nhận props và cập nhật state nếu cần');
    return null; // không cập nhật state
  }

  componentDidMount() {
    console.log('4. componentDidMount: Component đã được render ra DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate: Quyết định có cần render lại hay không');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('6. componentDidUpdate: Component vừa được cập nhật');
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount: Component sắp bị gỡ bỏ khỏi DOM');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('3. Render: Render JSX ra màn hình');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Tăng Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
