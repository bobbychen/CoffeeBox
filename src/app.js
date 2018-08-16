import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import mongoose from './utils/mongoose';
import webServer from './utils/webserver';
import routes from './controllers/all.api';



const mongodb = mongoose.init(
    config.dbHosts, config.dbName,
    config.dbUser, config.dbPass, config.dbParams
);

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

const server = webServer.run(app);

server.onSigint((cb) => {
    server.close(() => {
        mongodb.disconnect((err) => {
            cb(err);
        });
    });
});

export default app;
