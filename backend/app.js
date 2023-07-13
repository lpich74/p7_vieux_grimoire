const express = require('express');

const app = express();

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lucaspichollet:Nq8BtFZbRWyG57U8@lucasp-cluster0.mscptrr.mongodb.net/monVieuxGrimoire',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', userRoutes);
app.use('/api/books', bookRoutes);

module.exports = app;