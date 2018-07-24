import express from 'express';

import ActivityRule from '../models/activity-rule';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/wish/cafe/rule`, async (req, res) => {

    const activityRule = await ActivityRule.findOne();

    return res.json({
        code: 200,
        data:{
            explainText: activityRule ? activityRule.explainText: '',
            ruleText: activityRule ? activityRule.ruleText : '',
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;