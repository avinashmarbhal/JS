// const tinderUser = new Object() // if we declare object this way then this is an singleton object 
const tinderUser = {} // if we declare object this way then this is an non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Avinash",
            lastName:"Marbhal"
        }
    }//you can nest any number of objects inside object
}

// console.log(regularUser.fullname.userfullname); // this way you can access the nested objects

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}

// const obj3 = {...obj1,...obj2}// way one of adding two objests
const obj3 = Object.assign({},obj1,obj2)// way another way of adding two objests in this the first object is target and after that all the objects are suorces 
                                        // we can also use empty object '{}' in a place of targeted object but it don't affect the output , it's optional and just good practice of targeting empty object with all the objcets that we are want to merge  

// console.log(obj3);

const users= [
    {
        id:1,
        email:"avi@gmail.com"
    },
    {
        id:1,
        email:"avi@gmail.com"
    }

]//in most of the casee when we recive a vlaues from 'database' we get an array of object like this 

users[1].email // this is a one way in which we can access the value from array of objects

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // by this way you can get an array of keys of an objcet for further coputation => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // by this way you can get an array of values of an objcet for further coputation =>[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // by this way you can get an array of each indivitual keys:values of array => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check wether the object has that property or not we can use this

//*********** destructuring of Objects ************/

const course = {
    course: "JS",
    price: "999",
    courseInstructor:"Avinash"
}

// course.courseInstructor // there is another way of accessing if want to access multiple times and to make our code clean

//const {courseInstructor} = course // after using this line we can access the value by 'key' only 
                                    // after  destructuring this way we can jsut access by key

const {courseInstructor : Ins} =course // if we wnat to call access that course kay value by another name then in that case you can use this 

console.log(Ins);



















