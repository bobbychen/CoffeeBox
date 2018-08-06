if(typeof require !== 'undefined') XLSX = require('xlsx');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coffeeBox');

const Schema = mongoose.Schema;

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

const workbook = XLSX.readFile('./coffee.xlsx');

const groupActivity  = workbook.Sheets['group-activity'];
const json = XLSX.utils.sheet_to_json(groupActivity);

Promise.all(json.map((activity) => {
    console.log('import item:', activity);
    return groupActivity.create(activity);
})).then(() => {
    mongoose.disconnect();
});
