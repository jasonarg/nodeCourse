const request = require('supertest');
const expect = require('expect');


var app = require('./server').app;


describe('Server', () =>{
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });

    });

    describe('GET /users', () => {
        it('should return an array of users, with a user named jason', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body.users).toInclude({
                        name: 'Auttie',
                        age: 4
                    })
                })
                .end(done);
        });
    });
});