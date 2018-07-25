import mongoose from 'mongoose';

const {Schema} = mongoose;

const CoffeeAssistSchema = new Schema({

});

const CoffeeAssist = mongoose.model('CoffeeAssist', CoffeeAssistSchema);

export default CoffeeAssist;