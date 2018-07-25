if(typeof require !== 'undefined') XLSX = require('xlsx');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coffeeBox');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: String,
    price: Number,
    unit: String,
    summary: String,
    description: String,
    priceStr: String,
    categoryId: String,
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

const workbook = XLSX.readFile('./coffee.xlsx');

const coffee  = workbook.Sheets['coffee'];
const json = XLSX.utils.sheet_to_json(coffee);

Promise.all(json.map((coffee) => {
    console.log('import item:', coffee);
    return Coffee.create(coffee);
})).then(() => {
    mongoose.disconnect();
});
