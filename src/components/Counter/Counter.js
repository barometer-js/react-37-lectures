import React from 'react';
import s from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 15,
  };

  static propTypes = {
    //
  };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.Counter}>
        <span className={s.Counter__value}>{value}</span>

        <div className={s.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Decrease by 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Increase by 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
