import superTest from 'supertest';
import app from '../src/app';

before(function(done){
    global.server = app.listen(done);
    global.request = superTest.agent(server);
    console.log('before');
});

after(function(done){
    global.server.close(done)
    console.log('after');
});