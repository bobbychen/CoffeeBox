import mongoose from 'mongoose';

const {Schema} = mongoose;

const UserSchema = new Schema({
    openid: String,
});

const User = mongoose.model('User', UserSchema);

export default User;