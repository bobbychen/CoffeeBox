import express from 'express';

import CoffeeCategory from '../models/coffee-category';
import Coffee from '../models/coffee';

const baseUrl = '/wxa-api/api';

const router = new express.Router();

const toItemObj = (coffeeItem) => {
    const {_id,name, price, unit, summary, description, priceStr, imageUrl, descriptionUrl, sort} = coffeeItem;
    return {itemId: _id, name, price, unit, summary, description, priceStr, imageUrl, descriptionUrl, sort};
};

router.get(`${baseUrl}/mainbuyapi/getgoods`, async (req, res) => {
    const coffeeCategories = await CoffeeCategory.find();

    const menuList = await Promise.all(coffeeCategories.map(async (item)=>{
        const {_id,name,iconUrl,selectedNightIconUrl,nightIconUrl,titleImageUrl,type,nightSort,sort} = item;

        const coffeeItem = await Coffee.find(
            {
                categoryId: _id,
            }
        );
        return {
            _id,name,iconUrl,selectedNightIconUrl,nightIconUrl,titleImageUrl,type,nightSort,sort,
            itemList: coffeeItem.map((item) => toItemObj(item)),
        }
    }));

    return res.json({
        code: 200,
        data:{
            menuList: menuList,
            cart: null,
            promotionList: [],//promotion logic??
        },
        message: '成功',
        msgType: 0,
    }).end();
});

export default router;