import express from 'express';

import CoffeeWish from '../models/coffee-wish';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/wish/cafe/record/list`, async (req, res) => {
    const coffeeWishes = await CoffeeWish.find({});

    return res.json({
        code: 200,
        data:{
            recordList: {
                itemPerPage: 10,
                totalCount: 0,
                totalPage: 0,
                curPage: 0,
                startIndex: 0,
                itemList: coffeeWishes,
                links: [],
                params: null,
                offset: 0,
            },
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;