import express from 'express';

const app = express();

const users = [
    'Diego',
    'Márcio',
    'Robson',
    'Daniel',
];

app.get('/users', (request, response) => {
    const search = request.query.search;

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(users);
});

app.listen(3333);