const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.get('/', bookCtrl.getAllBooks);

router.get('/:id', bookCtrl.getOneBook);

router.get('/bestrating', bookCtrl.getBestRatings);

router.post('/', bookCtrl.createBook);

router.put('/:id', bookCtrl.modifyBook);

router.delete('/:id', bookCtrl.deleteBook);

router.post('/:id/rating', bookCtrl.createRating);

module.exports = router;