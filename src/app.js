import path from 'path';
import express from 'express';

import config from './config';
import mongoose from './utils/mongoose';
import webServer from './utils/webserver';
import routes from './controllers/all.api';

const staticPath = path.join(__dirname, '../../www');

const mongodb = mongoose.init(
    config.dbHosts, config.dbName,
    config.dbUser, config.dbPass, config.dbParams
);

const app = express();

app.use(express.static(staticPath));
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