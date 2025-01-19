//synchronous

function sum(){
    let ans = 0;
    for(let i=0; i<=1000; i++){
        ans = ans + i;
    }
    return ans;
}
let a = sum();
console.log(a);


// Asynchronous 

function fetchData(){
    console.log('Requesting data from the ChatGpt server...');

    setTimeout(() => {
        console.log('Data received from the ChatGPT server: []');
    }, 3000);
}

fetchData();