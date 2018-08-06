if(typeof require !== 'undefined') XLSX = require('xlsx');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coffeeBox');

const Schema = mongoose.Schema;

const ActivityRuleSchema = new Schema({
    title: String,
    textImageUrl: Array,
    shareDataDto: Object,
    ruleText: String,
    explainText: String,
});

const ActivityRule = mongoose.model('ActivityRule', ActivityRuleSchema);

const workbook = XLSX.readFile('./coffee.xlsx');

const groupRule  = workbook.Sheets['group-rule'];
const json = XLSX.utils.sheet_to_json(groupRule);

Promise.all(json.map((rule) => {
    console.log('import item:', rule);
    return ActivityRule.create(rule);
})).then(() => {
    mongoose.disconnect();
});
