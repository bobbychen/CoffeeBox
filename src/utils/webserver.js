import http from 'http';
import https from 'https';

const util = {
    parseHttpServerError: (error, port) =>{
        const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
        switch (error.code) {
            case 'EACCES':
                return bind + ' requires elevated privileges';
            case 'EADDRINUSE':
                return bind + ' is already in use';
            default:
                throw error;
        }
    },
};

const registerEventHandlers = (server, opts) =>{
    server.on('listening', () =>{
        const serverTypes = opts.https ? 'HTTPS' : 'HTTP';
        console.info('The %s server running on: %j', serverTypes, server.address());
    });

    server.on('error', (error) =>{
        if (error.syscall !== 'listen') {
            throw error;
        }
        console.error(util.parseHttpServerError(error, opts.port));
    });

    server.on('close', () =>{
        console.info('The web server be closed.');
    });

    return server;
};

const defaultOptions = {
    port: 3000,
    https: null,
};

export default {
    run: (app, opts = {}) =>{
        opts = Object.assign({}, defaultOptions, opts);

        let server = opts.https
            ? https.createServer(loadHttpsConfig(opts), app)
            : http.createServer(app);

        registerEventHandlers(server, opts).listen(opts.port);

        server.onSigint = (callback) =>{
            process.on('SIGINT', () =>{
                callback((err) =>{
                    process.exit(err ? 1 : 0);
                });
            });

            process.on('message', (msg)=> {
                if (msg === 'shutdown') {
                    callback((err) =>{
                        process.exit(err ? 1 : 0);
                    });
                }
            });
        };

        return server;
    },
};