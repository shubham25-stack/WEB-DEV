//fetch we are using to fetch data from the api
//this is also called DOM...
function getAnimalData(){
    fetch("https://fakerapi.it/api/v1/persons")
    .then(function(response){
        response.json()
        .the(function (finalData){
            console.log(finalData);
        })
    })
}

//by using async await  the cleaner way to write the same..
async function getAnimalData() {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json()
    console.log(finalData);
}