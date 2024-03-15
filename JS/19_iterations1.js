// #### for loop ####


// for (let index = 0; index <= 10; index++) {
//     const element = index
//     if(element == 5){
//         console.log("5 is best number");
//     }

//     //console.log(element); 
// }


for (let i = 0; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
    //console.log(`Inner loop value: ${j} and inner loop ${i}`);  
         // console.log(i + '*' + j + ' = '+ i*j );
    }
}


let myArray = ["avinash","rohan","omkar","siddharth"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}



//#### break and COntinue #####

// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if (element === 5) {
//         console.log("5 is best");
//         break
//     }
//     console.log(element);
    
// }


for (let index = 0; index <= 20; index++) {
    const element = index;
    if (element === 5) {
        console.log("5 is best");
        continue
    }
    console.log(element);
    
}