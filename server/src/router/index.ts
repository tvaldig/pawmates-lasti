import express from 'express';

import authentication from './authentication';
import users from './users';
import midtrans from './midtrans';
const router = express.Router();
export default (): express.Router => {
    authentication(router);
    users(router);
    midtrans(router);
    return router;
};