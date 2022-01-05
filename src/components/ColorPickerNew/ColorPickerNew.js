import React, { PureComponent } from 'react';
import classNames from 'classnames';
import s from './ColorPickerNew.module.css';

class ColorPickerNew extends PureComponent {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames(s.ColorPickerNew__option, {
      [s.ColorPickerNew__option__active]: index === this.state.activeOptionIdx,
    });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <div className={s.ColorPickerNew}>
        <h2 className={s.ColorPickerNew__title}>Color Picker New</h2>
        <p>Selected color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPickerNew;
