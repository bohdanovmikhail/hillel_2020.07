const express = require('express');
const app = express();

const users = require('./users');

app.use(express.static('../static'));

// Добавил роут, на получение всех пользователей
app.get('/users', function (req, res) {
    const userList = users.getAll();
    res.json(userList);
});

// Получение одного пользователя по его логину
app.get('/user', function (req, res) {
    const user = users.getUser(req.query.login);
    res.json({
        firstName: user.firstName,
        lastName: user.lastName,
    });
});

// Проверка логина пароля пользователя и возврат в виде строки valid или invalid
app.get('/auth', function (req, res) {
    const isCredsValid = users.checkCredentials(req.query.login, req.query.password);

    res.send(isCredsValid ? 'valid' : 'invalid');
});

app.listen(3000);
