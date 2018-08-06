import express from 'express';

import groupActivity, {ActivityType} from '../models/group-activity';
import activityRule from '../models/activity-rule';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

router.get(`${baseUrl}/group/activity/list`, async (req, res) => {
    const groupActivityVo = await groupActivity.find({ type: ActivityType.onlyNewUsers});
    const oldListActivityVo = await groupActivity.find({ type: ActivityType.AllUsers});
    const groupRule = await activityRule.findOne({});

    const {title, textImageUrl, shareDataDto, ruleText, explainText} = groupRule;

    return res.json({
        code: 200,
        data:{
            groupActivityVo,
            groupRule: {title, textImageUrl, shareDataDto, ruleText, explainText},
            isFocus: true,
            oldListActivityVo,
            isNewUser: true,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

router.get(`${baseUrl}/group/activity/detail`, async (req, res) => {
    return res.json({
        code: 200,
        data:{
            isNewUser: true,
            isFocus: true,
            groupRule: {},
            strangeGroup: [],
            detailVo: [],
            totalMember: 0,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;