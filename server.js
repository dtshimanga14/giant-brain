const express = require('express');
const cors = require('cors');
const { getAllSurvey } = require('./db/survey.js');

const app = express();
const port = process.env.PORT || 9000;
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});