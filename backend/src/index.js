const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-mnusz.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json())

// Tipos de parâmetros:

// Query Params: request.query - http://localhost:3333/rota?param1=value1&param2=value2
// Route Params: request.params - http://localhost:3333/rota/valor
// Body Params: request.body

app.use(routes);


app.listen(3333);