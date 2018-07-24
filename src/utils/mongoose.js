import mongoose from 'mongoose';
import Promise from 'bluebird';


mongoose.Promise = Promise;
Promise.promisifyAll(mongoose);

mongoose.connection.on('connected', () => {
    console.info('Mongoose get connection successfully.');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose get connection error: %o', err);
});

mongoose.connection.on('disconnected', () => {
    console.info('Mongoose mongodb connection disconnected.');
});


const wrap = {
    init: (hosts, name, user, pass, params, opts = {}) => {
        const uri = `mongodb://${hosts}/${name}?${params}`;
        const option = {
            user, pass,
            useMongoClient: true,
            promiseLibrary: Promise,
            ...opts,
        };

        console.info('Connecting to mongodb: %s', uri);
        mongoose.connect(uri, option);
        return wrap;
    },

    disconnect: (cb) => {
        mongoose.disconnect(cb);
    },
};

export default wrap;