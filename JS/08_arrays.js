const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);



//+++++++ Array methods  ++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)

//myArr.unshift(9) // it adds and element at 0th possittion by shifting all element one position ahed
// myArr.shift() // it removes first element
// console.log(myArr.indexOf(3));
// console.log(myArr.includes(9)); => false/true


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

console.log("A", myArr);
const myn1 = myArr.slice(1,3)// when we use this it give element from index 1-2 the last index's element is not added into this
                            //it return the rage you are given it don't change the orignal array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)//it manipulates the orignal array it simply cut the range(1-3) you are given along with last element that your given 
console.log("C", myArr);
console.log(myn2);

