import express from 'express';
import CafeStorage from '../models/cafe-storage';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/cafestorage/list`, async (req, res) => {
    const cafeStorage = await CafeStorage.findOne();//should find by user.

    return res.json({
        code: 200,
        data:{
            ...cafeStorage,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;