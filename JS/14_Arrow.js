const user = {
    username: "Avinash",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this); // if we see output of 'this' in stand alone engin like node
                    // in that case there is no defult globle variable present when we code and because of this the 'this' give us an '{}' empty object
                    // but when we try do same in browsers console in the browser's globle scope there is object called window is present so the 'this' will give that to us in browser
                    
// function chai(){
//     let username = "Avinash"
//     console.log(this.username);
// }

// chai()
                    

// const chai = function(){
//     let username = "Avinash"
//     console.log(this.username);
// }

// chai()

const chai =  () => {
    let username = "Avinash"
    console.log(this);
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>   num1+num2 //if we wnat to execute single statement the we can write like this 
// const addTwo = (num1,num2) =>   (num1+num2)  //or this  both are same
// console.log(addTwo(5,7));                    //if we use '()' in that case we don't need to write 'return'
                                            // if we use  curly brackets  '{}'  in that case we need do write 'return'


const addTwo = (num1,num2) =>   ({username:"Avinash"}) //for returning and object we can use curly brackets inside parentesis

console.log(addTwo());

        
