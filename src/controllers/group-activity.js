import express from 'express';

import groupActivity, {ActivityType} from '../models/group-activity';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/group/activity/list`, async (req, res) => {
    const groupActivityVo = await groupActivity.find({ type: ActivityType.onlyNewUsers});
    const oldListActivityVo = await groupActivity.find({ type: ActivityType.AllUsers});

    return res.json({
        code: 200,
        data:{
            groupActivityVo,
            groupRule: {},
            isFocus: true,
            oldListActivityVo,
            isNewUser: true,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;