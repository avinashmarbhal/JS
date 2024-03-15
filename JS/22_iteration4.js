//#### forin ####


const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(myObject[key]);
// }

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {

    console.log(programming[key]);//we can iterate array using 'forin' but it gives keys insted of values so it is recommended for only object 
                                // we can't iterate map in this because map are not iterable
    
}