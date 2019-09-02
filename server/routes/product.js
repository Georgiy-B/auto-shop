const router = require('express').Router();
const formidable = require('formidable');

const product = require('../controllers/product');
const cloudinary = require('../controllers/cloudinary');

function getDefaultCallback(res) {
  return (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  };
}

router.post('/', (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).send(err);

    let validationError = product.validate(fields);
    if (validationError) return res.status(400).send(validationError.message);

    cloudinary.uploadPicture(files.imgFile.path, (err, cloudImg) => {
      if (err) res.status(500).send(err);
      fields.imgUrl = cloudImg.url;
      product.addProduct(fields, getDefaultCallback(res));
    });
  });
});

router.get('/', (req, res) => {
  product.getAllProducts(getDefaultCallback(res));
});

router.get('/:id', (req, res) => {
  product.getProductById(req.params.id, getDefaultCallback(res));
});

router.put('/:id', (req, res) => {
  //TODO update img url is it has been changed
  product.updateProduct(req.params.id, req.body, getDefaultCallback(res));
});

router.delete('/:id', (req, res) => {
  product.deleteProduct(req.params.id, getDefaultCallback(res));
});

module.exports = router;