import express from 'express';
import coffee from './coffee';
const router = new express.Router();

router.get('/', function(req, res, next) {
    res.json({message: 'great!'}).end();
});

router.use(coffee);

export default router;