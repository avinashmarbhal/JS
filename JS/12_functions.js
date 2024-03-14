
function sayMyName(){
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName() //function exicution
// sayMyName  // function refrence

// function addTwoNumbers(number1,number2){  // when we write number1 and number2 infunction structure it is call parameter 
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1,number2){  // when we write number1 and number2 infunction structure it is call parameter 
    return(number1 + number2)
}

addTwoNumbers(3,6)// when we pass value in function while calling it, it is known as argument

const result  = addTwoNumbers(5,9)
// console.log(`result is : ${result}`)

function loginUserMessage(username="sma")//defualt  value
{
    if(!username)
    {
        console.log("please enter user name!")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


// function calculateCartPrice(...num1){ //(...)is call rest operator and can be use to accept mullltiple values
//                                         //(...) it is also know as spread operator 
//                                         // what to call this operator or what is its working is depend apon where we use it 
//     return num1;                        //if we passed 3 value in it then it just create array of that 3 vlaue

// }
function calculateCartPrice(val1,val2,...num1){ // if we pass 5 value in this then the first two value are gone go inside first two parameters and then 'rest' of all the values are gone go inside it ****
                                       
        return num1;                             
}

// console.log(calculateCartPrice(200,400,800));


const user = {
    username: "Avinash",
    price: 199
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user); // we can pass object in variable as well as directly

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))








