import mongoose from 'mongoose';

const {Schema} = mongoose;

const CoffeeCategorySchema = new Schema({
    name: String,
    iconUrl: String,
    selectedNightIconUrl: String,
    nightIconUrl: String,
    titleImageUrl: String,
    type: Number,
    nightSort: Number,
    sort: Number,
});

const CoffeeCategory = mongoose.model('CoffeeCategory', CoffeeCategorySchema);

export default CoffeeCategory;