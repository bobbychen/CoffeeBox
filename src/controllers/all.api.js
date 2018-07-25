import express from 'express';
import coffee from './coffee';
import groupActivity from './group-activity';
import activityRule from './activity-rule';
import cafeStorage from './cafe-storage';

const router = new express.Router();

router.get('/', function(req, res, next) {
    res.json({message: 'great!'}).end();
});

router.use(coffee);
router.use(groupActivity);
router.use(activityRule);
router.use(cafeStorage);

export default router;