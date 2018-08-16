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
    const {menu_id, city_code, client_session_key} = req.params;

    const activity = await groupActivity.find({ _id: menu_id });
    const groupRule = await activityRule.findOne({});

    const {_id: groupId,name, description,oldPrice,timeLeft: activityTime,imageUrl,priceLabel,inventoryLeft } = activity;
    return res.json({
        code: 200,
        data:{
            isNewUser: true,
            isFocus: true,
            groupRule: groupRule,
            strangeGroup: [],
            detailVo: {
                groupId,
                name,
                description,
                oldPrice,
                activityTime,
                imageUrl,
                label: priceLabel,
                inventoryLeft,
            },
            groupType: [
                {
                    groupAccount: 3,
                    price: 25,
                }
            ],
            totalMember: 0,
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;