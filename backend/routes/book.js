const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const bookCtrl = require('../controllers/book');

router.get('/bestrating', bookCtrl.getBestRatings);

router.get('/', bookCtrl.getAllBooks);

router.get('/:id', bookCtrl.getOneBook);

router.post('/', auth, multer.uploadImage, multer.sharpMiddleware, bookCtrl.createBook);

router.put('/:id', auth, multer.uploadImage, multer.sharpMiddleware, bookCtrl.modifyBook);

router.delete('/:id', auth, bookCtrl.deleteBook);

router.post('/:id/rating', auth, bookCtrl.createRating);

module.exports = router;