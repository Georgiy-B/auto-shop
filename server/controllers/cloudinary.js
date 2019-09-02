const cloudinary = require('cloudinary').v2;

//TODO
cloudinary.config({
  cloud_name: 'dvfujm5wo',
  api_key: '773653718747241',
  api_secret: 'XeXOokpDVPmlw07PItR7mgmx7Uk',
});

module.exports.uploadPicture = function(imgPath, callback) {
  cloudinary.uploader.upload(imgPath, callback);
}