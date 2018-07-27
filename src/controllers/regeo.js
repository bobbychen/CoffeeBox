import express from 'express';

const router = new express.Router();

router.get('/v3/geocode/regeo', async (req, res) => {

    return res.json({
        status: 1,
        info: 'OK',
        infocode: 10000,
        regeocode: {
            formatted_address: '',
            addressComponent: {
                country: '',
                province: '',
                city: '',
                citycode: '',
                district: '',
                adcode: '',
                township: '',
                towncode: '',
                neighborhood: {},
                building: {},
                streetNumber: {},
                businessAreas:[],
            },
            pois: [],
            roads: [],
            roadinters: [],
            aois: [],
        },
    }).end();
});

export default router;