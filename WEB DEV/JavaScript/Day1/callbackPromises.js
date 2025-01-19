//function to simulate downloading data 
function downloadData(callback){
    setTimeout(function(){
        console.log("Data downloaded");
        callback("Downloaded Data");
    }, 1000);
}

// fuunction to simulate processing the download
function processData(data, callback){
    setTimeout(function(){
        console.log("Data Processed");
        callback("Processed " + data);
    }, 1000);
}

//Initiating the process
downloadData(function(downloadData){
    processData(downloadData, function(processData){
        console.log("Final result: " + processData);
    });
});

//function using simulate downloaded data, now returns a promise
function downloadData() {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Data Downloaded");
            resolve("Downloaded Data")
        }, 1000);
    });
}

//function to simulate processing the downloaded data, now return a 
function processData(data){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Data Processed");
            resolve("Proccessed " + data);
        }, 1000);
    });
}

//Using promises to handle the asynchronous operations
downloadData()
    .then(processData)
    .then(function(finalResult){
        console.log("Final result: " + finalResult);
    })
    .catch(function(error){
        console.error("An error occured: ",error);

    });