import mongoose from 'mongoose';

const {Schema} = mongoose;

const CafeStorageSchema = new Schema({
    growingCoffeeCount: String,
    deliveryFee: Number,
    showBanner: Boolean,
    bannerUrl: String,
    bannerLink: String,
    isFocus: Boolean,
    showIntroduction: Boolean,
    isNewUser: Boolean,
    cafeStorageList: Array,
    waitPayCafeList: Array,
    userId: String,
});

const CafeStorage = mongoose.model('CafeStorage', CafeStorageSchema);

export default CafeStorage;