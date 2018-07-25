import express from 'express';

import Order, {OrderType} from '../models/order';


const baseUrl = '/wxa-api/api';

const router = new express.Router();
router.get(`${baseUrl}/group/v1/record`, async (req, res) => {
    const groupActivityOrders = await Order.find({type: OrderType.GroupOrder});

    return res.json({
        code: 200,
        data:{
            recordList: groupActivityOrders,
            pageSize: 0,
            totalCount: 0,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;