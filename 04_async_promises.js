const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done fetch with callback!');
    }, 1500);
}

// Using Promises
const fetchDataB = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done with promise!');
        }, 1500);
    });

    return promise;
}

// Calling functions
setTimeout(() => {
    console.log('Timer is done!');
    
    // With callback
    fetchData((text) => {
        console.log(text);
    });

    // With promise
    fetchDataB()
        .then(text => {
            console.log(text);
            return fetchDataB(); // Chain promises
        })
        .then((text2) => {
            console.log(text2);
        });

}, 2000);  // 2sec tiimeout function

console.log('Hello!');
console.log('Hi!');

