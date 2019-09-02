import React from 'react';
import PropTypes from 'prop-types';
import './InputNumber.scss';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let value = parseFloat(e.target.value);

    if ((this.props.min !== undefined && value < this.props.min) || (this.props.max && value > this.props.max)) {
      return;
    }

    this.setState({
      value: isNaN(value) ? '' : value
    });
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const labelClass = !this.props.label ? 'd-none' : '';
    const requiredClass = this.props.required && !this.state.value ? 'required' : 'd-none';
    const inputClass = !!this.state.value ? 'has-value' : '';

    return (
      <label className='input-number'>
        <input
          type="number"
          placeholder="&nbsp;"
          className={inputClass}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
          onChange={this.onChange}
          ref={this.input}
        />
        <span className={`label ${labelClass}`}>{this.props.label}</span>
        <div className='border'></div>
        <div className={requiredClass}>* Поле обязательно для заполнения</div>
      </label>
    );
  }
}


InputNumber.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  max: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  step: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  onChange: PropTypes.func
};

InputNumber.defaultProps = {
  label: '',
  required: false,
  step: 1,
  value: ''
};

export default InputNumber;