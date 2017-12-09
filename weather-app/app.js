const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=100%20Holliday%20Street%20Baltimore',
    json: true
}, (error, response, body) => {
    console.log(body);
});