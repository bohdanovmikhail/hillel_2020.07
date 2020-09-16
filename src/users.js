const users = [
    {
        login: 'user1',
        password: 'pass1',
        firstName: 'User 1',
        lastName: 'USER 1',
    },
    {
        login: 'user2',
        password: 'pass2',
        firstName: 'User 2',
        lastName: 'USER 2',
    }
];

function getAll() {
    return users;
}

function getUser(login) {
    return users.find(user => user.login === login);
}

function checkCredentials(login, password) {
    const user = getUser(login);

    if (!user) {
        return false;
    }

    return user.password === password;
}

module.exports = {
    getAll,
    getUser,
    checkCredentials,
};
