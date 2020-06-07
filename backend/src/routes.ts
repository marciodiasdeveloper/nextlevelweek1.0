import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
    return response.json(filteredUsers);
});

export default routes;