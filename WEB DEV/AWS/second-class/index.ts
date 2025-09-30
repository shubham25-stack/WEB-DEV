interface User {
    id:string;
    name:string;
    age: number;
    email:string;
    password:string;
};

// function sumOfAge(user1:User,user2:User){
//     return user1.age + user2.age;
// }
// const age = sumOfAge({name:'Paro',age:20}, {name:'Jargon',age:30});
// console.log(age);

// interface UpdatePropsOptional{
//     name?:string;
//     age?:number;
//     password?: string;
// }
//same as the uper mentioned function
type UpdateProps = Pick<User, 'name'|'age'|'email'>
type UpdatePropsOptional = Partial<UpdateProps>

 
function updateUser(updateProps:UpdateProps){
    //hit the database to update the user

}
// updateUser(){

// }

//read only
type User1 = {
    readonly name: string;
    readonly age: number;
    readonly country: string
}
//on readonly the typescript is not expoilt or do anything problematic
//if you ever have an config value it doesnot update the uservalue and anything it can be inforced through

const user:User1 = {
    name: 'John',
    age:25,
    country:'USA'
}

// const users{
//     "shiv":{
//         id:'shiv1',
//         username:'harkirat'
//     },
//     "rashid":{
//         id:"'rashid',
//         username: 'rashid@12'
//     }
// }
// records and .are also from these kind of things so now exclude is also you have to learn about
// Exclude works as in typescript that exclude were work on same as include and exclude that make some sence and also be kind to add something and exit something thaats called the inclide and exclude system function in the uer data and functional forum thats it.
//  app.put("/user",(req,res) =>{
//     const { success } = userProfileSchema.safeParse(req.body);
//     const updateBody = req.body;
//     if (!success){
//         res.status(411).json({
//             messsage:"app running freely"
//         })
//         return;
//     }
//  })

// the api endpoint of typescipt
