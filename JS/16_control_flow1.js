// **** if ******

// const isUserloggedIn = true;
// const temp = 41
 
// if (2 == "2") {
//     console.log("executed!");
// }  => true 

// if (2 === "2") {
//     console.log("executed!");
// } => false (because all triple equals to also checks the type of the value)


// if (temp < 40) {
//     console.log("less than 50");
    
// }else{
//      console.log("greter than 50");
// }

// const score = 200

// if(score >100){   
//     let power = "fly"  // never use var 
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// <, >, <=, >=, ==, !=, ===, !==

const balance = 850

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500) {
//     console.log("less than");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance < 900)
// {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User logged in");
    
}

