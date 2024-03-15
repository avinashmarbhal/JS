const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.map( (num) => {
//     return num+10;
// })

const newNums = myNums
                    .map( (num) => num*10)//this is called chainning we can execute the values in that function 
                    .map((num)=> num+1)  // and then can that values to another level
                    .filter((num) => num >= 40 )

console.log(newNums);