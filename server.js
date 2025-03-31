const express = require('express');
const path = require('path');
const app = express();
const port = 1601

app.use(express.static(path.join(__dirname, 'Flower')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Flower', 'flower.html'))
})

app.listen(port, () => {
    console.log("Tutto ok")
})