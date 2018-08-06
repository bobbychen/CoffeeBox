import mongoose from 'mongoose';

const {Schema} = mongoose;

const ActivityRuleSchema = new Schema({
    title: String,
    textImageUrl: Array,
    shareDataDto: Object,
    ruleText: String,
    explainText: String,
});

const ActivityRule = mongoose.model('ActivityRule', ActivityRuleSchema);

export default ActivityRule;