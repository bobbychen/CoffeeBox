import mongoose from 'mongoose';

const {Schema} = mongoose;

const CoffeeSchema = new Schema({
    name: String,
    price: Number,
    unit: String,
    imageUrl: String,
    summary: String,
    description: String,
    descriptionUrl: String,
    sellOut: Boolean,
    sort: Number,
    inSaleTime: String,
    startTime: String,
    endTime: String,
    priceStr: String,
    categoryId: String,
});

const Coffee = mongoose.model('Coffee', CoffeeSchema);

export default Coffee;