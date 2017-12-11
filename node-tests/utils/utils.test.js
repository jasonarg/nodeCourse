const expect = require('expect');

const utils = require('./utils');

it('should add two numbers and return them', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');

});

it('should square a given integer', () => {
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
});

it('should set firstName and lastName', () => {
    var user = {
        location: 'Philadelphia',
        age: 25
    };
    var res = utils.setName(user, 'Jason Ross');

    expect(res).toInclude({
        firstName: 'Jason',
        lastName: 'Ross'
    });

});

/*
it('should expect some values', () => {
    expect(12).toBe(12);
    expect({name: 'Jason'}).toEqual({name: 'Jason'});
    expect([2,3,4]).toInclude(4).toExclude(1);
    expect({
        name: 'Jason',
        age: 37,
        location: 'Baltimore'
    }).toInclude({
        age: 37
    });

});*/
