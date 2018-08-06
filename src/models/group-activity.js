import mongoose from 'mongoose';

const {Schema} = mongoose;

export const ActivityType = {
    onlyNewUsers: 1,
    AllUsers: 2
};

const GroupActivitySchema = new Schema({
    name: String,
    type: Number,//活动类型
    price: Number,
    oldPrice: Number,
    finalPrice: Number,
    groupAccountLabel: Number,
    priceLabel: String,
    description: String,
    imageUrl: String,
    sort: Number,
    timeLeft: Number,
    inventoryLeft: Number,
});

const GroupActivity = mongoose.model('GroupActivity', GroupActivitySchema);

export default GroupActivity;