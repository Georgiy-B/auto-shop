import React from 'react';
import PropTypes from 'prop-types';
import './ImageUploader.scss';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previewUrl: this.props.previewUrl
    };

    this.fileInputRef = React.createRef();
    
    this.showPreview = this.showPreview.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFileInputChange = this.onFileInputChange.bind(this);
    this.onDropzoneClick = this.onDropzoneClick.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  showPreview(file) {
    if (!file) return;

    let reader = new FileReader();

    reader.onload = (e) => {
      this.setState({
        previewUrl: e.target.result
      });
    }

    reader.readAsDataURL(file);
  }

  onChange(file) {
    if (this.props.disabled) return;
    this.showPreview(file);
    this.props.onChange && this.props.onChange(file);
  }

  onFileInputChange(e) {
    if (this.props.disabled) return;
    let file = e.target.files[0];
    this.onChange(file);
  }

  onDropzoneClick(e) {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e) {
    e.preventDefault();

    if (this.props.disabled) return;

    let file = e.dataTransfer.files[0];
    this.onChange(file);
  }

  render() {
    const previewBg = {
      backgroundImage: `url(${this.state.previewUrl})`
    };

    const imgVisibilityClass = !this.state.previewUrl ? 'visible' : '';

    return (
      <div
        className={`image-uploader ${this.props.className}`}
        style={previewBg}
        onClick={this.onDropzoneClick}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={this.fileInputRef}
          onChange={this.onFileInputChange}
        />

        <div className="upload-icon">
          <img
            className={imgVisibilityClass}
            src={`${process.env.PUBLIC_URL}/icons/cloud-upload.svg`}
            alt="upload"/>
        </div>
      </div>
    );
  }
}

ImageUploader.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  previewUrl: PropTypes.string
};

ImageUploader.defaultProps = {
  className: '',
  disabled: false,
  previewUrl: ''
};

export default ImageUploader;