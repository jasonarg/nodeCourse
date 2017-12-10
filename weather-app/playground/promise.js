var somePromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('Unable to fulfill promise');
        //resolve('Hey, it worked!');
    }, 2500)
});

somePromise.then((message) => {
        console.log('Success: ', message);
    }, (errorMessage) => {
        console.log('Error: ', errorMessage);
    }
);