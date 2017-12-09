const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode.js');

/*const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;*/

/*geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(results, undefined, 4));
    }
});*/

//https://api.darksky.net/forecast/eaf287b090aac83a10cfca7625fc18ba/37.8267,-122.4233
request({
    url: `https://api.darksky.net/forecast/eaf287b090aac83a10cfca7625fc18ba/39.287866,-76.592166499999`,
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }
    else{
        console.log('unable to fetch weather');
    }

});
