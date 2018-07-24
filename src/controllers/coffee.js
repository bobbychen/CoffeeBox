import express from 'express';

import CoffeeCategory from '../models/coffee-category';

const router = new express.Router();
const baseUrl = '/wxa-api/api';

router.get(`${baseUrl}/mainbuyapi/getgoods`, async (req, res) => {
    const coffeeCategory = await CoffeeCategory.find();
    return res.json({
        code: 200,
        data:{
            menuList: coffeeCategory,
        },
        message: '成功',
        msgType: 0,
    })
});

export default router;