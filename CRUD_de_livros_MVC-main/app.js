const express = require('express');
const app = express();

app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');

app.use('/', bookRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});