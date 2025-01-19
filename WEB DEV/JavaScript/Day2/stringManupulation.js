let str = "Welcome to the world ";
console.log(str.length);// for finding the length

//finding the index of
function findIndexOf(str, target){
    console.log("Original String: ",str);
    console.log("Index : ", str.indexOf(target));
}
findIndexOf("Wellcome to the duniya","duniya");

 //slice
 function getSlice(str, start,end){
    console.log("Original string",str);
    console.log("After slice: ",str.slice(start,end));
 }
 getSlice("Hello buddy welcome",0,6 );

 //replacing the element we can write the function as 
 //str.replace(target, replacement);

 //split string
 str.split(" ");

 //trim
 str.trim();

 //uppercase/lowercase
 str.toUpperCase();
 str.toLocaleLowerCase();