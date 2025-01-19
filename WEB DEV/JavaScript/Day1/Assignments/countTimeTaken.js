const startTime = Date.now();

setTimeout(() => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(`Elapsed time : ${elapsedTime} ms`);

}, 1000);