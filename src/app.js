import express from 'express';

import config from './config';
import mongoose from './utils/mongoose';
import webServer from './utils/webserver';
import routes from './controllers/all.api';

import fs from 'fs';


const mongodb = mongoose.init(
    config.dbHosts, config.dbName,
    config.dbUser, config.dbPass, config.dbParams
);

//add ssl support
var privateKey = fs.readFileSync('/etc/letsencrypt/live/wx.harryyan.xin/privkey.pem');
var certificate = fs.readFileSync('/etc/letsencrypt/live/wx.harryyan.xin/fullchain.pem');
var credentials = {key: privateKey, cert: certificate};
var app = express.createServer(credentials);

//const app = express();

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
