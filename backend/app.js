const express = require('express');

const app = express();

const userRoutes = require('./routes/user');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lucaspichollet:Nq8BtFZbRWyG57U8@lucasp-cluster0.mscptrr.mongodb.net/monVieuxGrimoire',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//const Book = require('./models/Book');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/*
app.get('/api/books', (req, res) => {
    const books = [

    ];
    res.status(200).json(books);
});

app.get('/api/books/:id', (req, res) => {
    const id = ;
    res.status(200).json(id.book);
});

app.get('/api/books/bestrating', (req, res) => {
    const bestrating = [

    ];
    res.status(200).json(bestrating);
});

app.post('/api/books', (req, res) => {
    res.status(200).json({ message: string });
});

app.put('/api/books/:id', (req, res) => {
    const id = ;
    res.status(200).json({ message: string });
});

app.delete('/api/books/:id', (req, res) => {
    const id = ;
    res.status(200).json({ message: string });
});

app.post('/api/books/:id/rating', (req, res) => {
    const id = ;
    const rating = ;
    res.status(200).json(id.book.rating);
});
*/

app.use('/api/auth', userRoutes);

module.exports = app;