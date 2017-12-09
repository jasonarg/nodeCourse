console.log('starting app');

setTimeout( name => console.log(`Inside of callback, ${name}`), 2000, 'jason');

setTimeout( name => console.log(`Inside of callback, ${name}`), 0, 'first');

console.log('finishing up');