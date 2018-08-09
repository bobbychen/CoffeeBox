import express from 'express';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.post(`${baseUrl}/group/record/create`, async (req, res) => {
    const {activity_id} = req.query;

    console.log(activity_id);

    return res.json({
        code: 200,
        data:{},
        message: '成功',
        msgType: 0,
    }).end();
});
export default router;