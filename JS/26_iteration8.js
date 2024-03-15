const myNums = [1,2,3]


//**Using normal function */
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0) //at the end we gave an starting point for the map reduce's 'accumulator'
//     //all the values are one by one are gone come form 'currentValue' to the 'accumulator'
//     // and at the end the 'reduce' will give us the final total value from accumulator

//     // acc: 0 and currval: 1
//     // acc: 1 and currval: 2
//     // acc: 3 and currval: 3
//     // total: 6


//**Using Arrow function */
const myTotal = myNums.reduce( (acc,currval) => acc+currval,0 )

  //  console.log("total: "+ myTotal);


const shoppingCart =[
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data science course",
        price: 12999
    },

  ]

 const total = shoppingCart.reduce((acc,item,) => acc+item.price,0)
  console.log("total:"+ total);