var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
           if(typeof a === 'number' && typeof b === 'number'){
               resolve(a + b);
           }
           reject('Arguments must be numbers');
       }) , 1500
    });
};

asyncAdd('1', 3).then((res)=>{
    console.log('Result: ', res);
    return asyncAdd(res, 30);
}).then((res)=>{
    console.log('Should be 34:', res)
}).catch((errorMessage) => {
    console.log(errorMessage);
});

/*
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
);*/
