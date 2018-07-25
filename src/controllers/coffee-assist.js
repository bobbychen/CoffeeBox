import express from 'express';

import CoffeeAssist from '../models/coffee-assist';


const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/wish/cafe/assist/list`, async (req, res) => {

    const coffeeAssist = await CoffeeAssist.find({});

    return res.json({
        code: 200,
        data:{
            assistantList: {
                itemPerPage: 10,
                totalCount: 0,
                totalPage: 0,
                curPage: 0,
                startIndex: 0,
                itemList: coffeeAssist,
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