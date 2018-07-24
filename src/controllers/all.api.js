import express from 'express';

const router = new express.Router();

router.get('/', function(req, res, next) {
    res.json({message: 'great!'});
});

export default router;