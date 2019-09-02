import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

class TextArea extends React.Component {
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
    const areaClass = !!this.state.value ? 'has-value' : '';

    return (
      <div className='text-area'>
        <label className="textarea-wrapper">
          <textarea
            className={areaClass}
            cols={this.props.cols}
            rows={this.props.rows}
            placeholder="&nbsp;"
            value={this.state.value}
            onChange={this.onChange}
          />
          <div className='border border-top'></div>
          <div className='border border-bottom'></div>
          <span className={`label ${labelClass}`}>{this.props.label}</span>
        </label>
        <div className={requiredClass}>* Поле обязательно для заполнения</div>
      </div>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  cols: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  rows: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  value: PropTypes.string,
  onChange: PropTypes.func
};

TextArea.defaultProps = {
  label: '',
  required: false,
  cols: 30,
  rows: 10,
  value: ''
};

export default TextArea;