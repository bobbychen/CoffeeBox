import mongoose from 'mongoose';

const {Schema} = mongoose;


export const OrderType = {
    GroupOrder: 1,
    NormalOrder: 2,
};
const OrderSchema = new Schema({
    type: Number,
    groupId: String,
    title: String,
    price: Number,
    buyTime: String,
    status: String,
    userId: String,
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;