import mongoose from 'mongoose';

const {Schema} = mongoose;

const OrderSchema = new Schema({
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;