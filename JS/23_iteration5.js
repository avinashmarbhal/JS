// ###### foreach ######

const coding = ["js","ruby","java","python","cpp"]

//forEach using normal function
// coding.forEach(function (val) {
//     console.log(val);
// })


//forEach using Arrow function
// coding.forEach( (item) => {  //to use this function we have to add '.forEach()' after the array name
//                             // and then we have to defind function inside the paranthesis of 'forEach'
//             console.log(item);//when we define function it it we don't have to give it a name
// } )                           // and afer that we just need to give a name of 'parameretr' throug which  we are gone access the values 




// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // we can also pass the refrence of function in it
//                         //we are not required to execute it we just need to pass the refrence of it

            //(item,index,hole_array)
// coding.forEach( (item,value,array)=> { // the forEach have access of multiple values like array value,index, and also the hole array itself
//         console.log(item,value,array);
// })


const myCoding =[
    {
        languageName:"javaScript",
        langusageFileName:"js"
    },
    {
        languageName:"java",
        langusageFileName:"java"
    },
    {
        languageName:"Python",
        langusageFileName:"py"
    },
]  // ****** array of object *****  most imp

myCoding.forEach( (obj) => {
        console.log(`languageName:- ${obj.languageName}     and    languageFileName:- ${obj.langusageFileName}`);
})