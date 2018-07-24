import chai from 'chai';
import chaiHttp from 'chai-http';

import request from 'supertest';
import server from '../../src/app';
chai.use(chaiHttp);

describe('Coffee Specs', () => {
    it('should return coffee detail by id', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .end(done);
    });
});