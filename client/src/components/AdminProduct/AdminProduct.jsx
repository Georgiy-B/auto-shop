import React from 'react';
import MaterialCard from '../MaterialCard/MaterialCard';
import ImageUploader from '../ImageUploader/ImageUploader';
import InputText from '../InputText/InputText';
import InputNumber from '../InputNumber/InputNumber';
import TextArea from '../TextArea/TextArea';
import './AdminProduct.scss';

class AdminProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      price: 0,
      imgFile: null
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onImgFileChange = this.onImgFileChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  onPriceChange(e) {
    this.setState({
      price: parseFloat(e.target.value)
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  onImgFileChange(file) {
    this.setState({
      imgFile: file
    });
  }

  onFormSubmit(e) {
    e.preventDefault();

    let form = new FormData();
    form.append("name", this.state.name);
    form.append("description", this.state.description);
    form.append("imgFile", this.state.imgFile);
    form.append("price", this.state.price);

    let url = '/api/products';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: form
    })
    .then( res => {
      //TODO notification if ok(200) or error(500/400)
      console.log('fetch ok', res);
    })
    .catch( err => {
      //TODO notification
      console.log('fetch err', err);
    });
  }

  render() {
    return (
      <form className="admin-product" onSubmit={this.onFormSubmit}>
        <MaterialCard className="admin-product-image">
          <ImageUploader onChange={this.onImgFileChange} />
        </MaterialCard>

        <MaterialCard title="Данные товара" className="admin-product-info">
          <div className="admin-product-info-form">
            <InputText label="Название" onChange={this.onNameChange} />
            <InputNumber label="Цена" step="0.01" onChange={this.onPriceChange} />
            <TextArea label="Описание" onChange={this.onDescriptionChange} />
          </div>
        </MaterialCard>

        <MaterialCard title="История заказов" className="product-hostory">
          История заказов
        </MaterialCard>
      </form>
    );
  }
}

export default AdminProduct;