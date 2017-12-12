const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Auttie', 4);
        expect(spy).toHaveBeenCalledWith('Auttie', 4);
    });

    it('should call saveUser with user object', () => {
        var email = 'test@example.com';
        var password = '123123123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});