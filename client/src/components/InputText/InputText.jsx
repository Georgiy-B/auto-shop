import React from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const labelClass = !this.props.label ? 'd-none' : '';
    const requiredClass = this.props.required && !this.state.value ? 'required' : 'd-none';
    const inputClass = !!this.state.value ? 'has-value' : '';

    return (
      <label className='input-text'>
        <input
          type="text"
          className={inputClass}
          placeholder="&nbsp;"
          value={this.state.value}
          onChange={this.onChange}
        />
        <span className={`label ${labelClass}`}>{this.props.label}</span>
        <div className='border'></div>
        <div className={requiredClass}>* Поле обязательно для заполнения</div>
      </label>
    );
  }
}

InputText.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

InputText.defaultProps = {
  label: '',
  required: false,
  value: ''
};


export default InputText;