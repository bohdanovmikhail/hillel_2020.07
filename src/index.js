const express = require('express');
const bodyParser = require('body-parser');
const contactsDB = require('./contactsDB');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../static'));

app.get('/get-all', function (req, res) {
    const contacts = contactsDB.getAll();
    res.json(contacts);
});

app.get('/create', function (req, res) {
    const record = JSON.parse(req.query.record);

    contactsDB.create(record);
    res.send();
});

app.get('/update', function (req, res) {
    const index = req.query.index;
    const record = req.query.record;

    contactsDB.update(index, record);
    res.send();
});

app.get('/remove', function (req, res) {
    const indexes = req.query.indexes;

    contactsDB.remove(indexes);
    res.send();
});

app.get('/find', function (req, res) {
    const prediction = req.query.prediction;

    const result = contactsDB.find(prediction);
    res.json(result);
});

app.listen(3000);
