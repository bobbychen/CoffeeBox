import express from 'express';
import fetch from 'node-fetch';

import User from '../models/user';

const baseUrl = '/wxa-api/api';

const AppID = "wx0971d2fccc12381d";
const AppSecret = "75867ffde55e9cf63d77b7d53f2d66e3";

const router = new express.Router();

router.post(`${baseUrl}/jscode2session`, async(req, res) => {
    try{
        const {jsCode} = req.body;
        console.log('jsCode', jsCode);
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${AppID}&secret=${AppSecret}&js_code=${jsCode}&grant_type=authorization_code`;

        const response = await fetch(url).then((res) => res.json());
        const {session_key, openid} = response;
        console.log('{session_key, openid}', {session_key, openid});
        const user = await User.findOne({openid});
        if(user){
            const {_id: id} = user;
            return res.json({
                session_key,
                openid,
                unionid: id
            }).end();
        }
        else {
         const newUser = await User.create({openid});
            const {_id: id} = newUser;
            return res.json({
                session_key,
                openid,
                unionid: id
            }).end();
        }
    }
    catch(exception)
    {
        return res.json({
            code: 500,
            data:{exception},
            message: '失败',
            msgType: 0,
        }).end();
    }
});

export default router;