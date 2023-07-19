const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
})

const uploadImage = multer({ storage }).single('image');

const sharpMiddleware = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const { filename } = req.file;
  const resizedImagePath = path.resolve(req.file.destination, 'resized_images', filename);

  sharp(req.file.path)
    .resize(400, 400)
    .toFile(resizedImagePath)
    .then(() => {
        fs.unlinkSync(req.file.path);
        next();
    })
    .catch((err) => {
        next(err);
    });
};

module.exports = {
  uploadImage,
  sharpMiddleware
};