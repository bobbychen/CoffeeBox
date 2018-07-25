import mongoose from 'mongoose';

const {Schema} = mongoose;

const CoffeeWishSchema = new Schema({
    status: Number,
    created: String,
    growCafe: Number,
    needGrowCafe: Number,
    headImage: [],
    saleGoodsName: String,
    userId: String,
});

const CoffeeWish = mongoose.model('CoffeeWish', CoffeeWishSchema);

export default CoffeeWish;