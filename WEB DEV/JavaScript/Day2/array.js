//push
const initarr = [1,2 ,3];
  initarr.push(6);
console.log(initarr);

//pop
//remove from the end

//shift
// add element in first

// unshift
// remove element from first

//merge 2 array by using concat.
console.log(firstarr.concat(secondArr))

//another way to merge 2 Array.
for(let i = 0; i<secondArr; i++){
    firstarr.push(secondArr[i]);
}
console.log(firstarr);

//best way to merge the array
function logThing(str){
    console.log(str);
}
firstArr.array.forEach(logThing) // for each is an callback function

//callback function

function log1(){
    console.log("This is log 1")
}

function log2(){
    console.log("This is log 2")
}

function logWhat(fnc){
    fnc();
}

logWhat(log2)

// map
