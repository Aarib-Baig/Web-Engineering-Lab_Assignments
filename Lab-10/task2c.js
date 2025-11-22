const intervalId = setInterval(() => {
    console.log('Running...');
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped.');
}, 10000);