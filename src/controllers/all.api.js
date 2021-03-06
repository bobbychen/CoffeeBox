import express from 'express';
import coffee from './coffee';
import groupActivity from './group-activity';
import activityRule from './activity-rule';
import cafeStorage from './cafe-storage';
import coffeeAssist from './coffee-assist';
import coffeeWish from './coffee-wish';
import order from './order';
import regeo from './regeo';
import groupRecord from './group-record';
import authorization from './authorization';

const router = new express.Router();

router.get('/', function(req, res, next) {
    res.json({message: 'great!'}).end();
});

router.use(coffee);
router.use(groupActivity);
router.use(activityRule);
router.use(cafeStorage);
router.use(coffeeAssist);
router.use(coffeeWish);
router.use(order);
router.use(regeo);
router.use(groupRecord);
router.use(authorization);

export default router;