if(typeof require !== 'undefined') XLSX = require('xlsx');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coffeeBox');

const Schema = mongoose.Schema;

const coffeeCategorySchema = new Schema({
    name: String,
    iconUrl: String,
    selectedNightIconUrl: String,
    nightIconUrl: String,
    titleImageUrl: String,
    type: Number,
    nightSort: Number,
    sort: Number,
});

const CoffeeCategory = mongoose.model('CoffeeCategory', coffeeCategorySchema);

const workbook = XLSX.readFile('./coffee-category.xlsx');

const coffeeCategory  = workbook.Sheets['coffee-category'];
const json = XLSX.utils.sheet_to_json(coffeeCategory);

Promise.all(json.map((coffeeCategory) => {
    console.log('import item:', coffeeCategory);
    return CoffeeCategory.create(coffeeCategory);
})).then(() => {
    mongoose.disconnect();
});
