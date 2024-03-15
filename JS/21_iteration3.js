// #### for of ####

// ["","","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "Helllo world"
// for (const greet of greeting) {

//     console.log(greet);
    
// }





// ##### MAP ####

const map = new Map() //The Map object holds key-value pairs and remembers the original insertion order of the keys.
map.set('IN','India')
map.set('USA','United state')
map.set('FR','France')
map.set('IN','India')  //even if we add repited value then also it  did not accept that value 


// for (const [key,value] of map) { //you can also destructure array like that here

//     console.log(key,":-",value)
    
// }

const myObject ={
    "game1":"NFS",
    "game2":"PUBG"
}

for (const [key, value] of myObject) {
   // console.log(key,value);           // ny using forof we can't iterate the object
}

